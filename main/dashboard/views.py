from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from .models import JobEntry, ResumeTemplate, ResumeTemplateWorkExperience, ResumeTemplateWorkExperienceBulletPoint
from datetime import datetime

@login_required(login_url='accounts:login')
def dashboard_home(request):
    context = {
        'user_info': {
            'username': request.user.username
        }
    }
    return render(request, 'dashboard/index.html', context)

@login_required
def dashboard_create_job_entry(request):
    if request.method == 'POST':
        company_name = request.POST['company_name']
        job_post_url = request.POST['job_post_url']
        applied_str = request.POST.get('applied', 'False')
        applied = (applied_str == 'True')
        job_entry = JobEntry.objects.create(
            user=request.user,
            company_name=company_name,
            job_post_url=job_post_url,
            applied=applied
        )
        return redirect('dashboard:dashboard_job_entries')
    return render(request, 'dashboard/create_job_entry.html')

@login_required
def dashboard_job_entries(request):
    job_entries = JobEntry.objects.filter(user=request.user)
    return render(request, 'dashboard/job_entries.html', {'job_entries': job_entries})

@login_required
def dashboard_create_resume_template(request):
    if request.method == 'POST':
        resume_template = ResumeTemplate.objects.create(
            user=request.user,
            template_name=request.POST['template_name'],
            first_name=request.POST['first_name'],
            last_name=request.POST['last_name'],
            city=request.POST['city'],
            state=request.POST['state'],
            email=request.POST['email'],
            phone_number=request.POST['phone_number']
        )

        work_experience_count = 1
        while f'company_name_{work_experience_count}' in request.POST:
            company_name = request.POST[f'company_name_{work_experience_count}']
            job_title = request.POST[f'job_title_{work_experience_count}']
            city = request.POST[f'city_{work_experience_count}']
            state = request.POST[f'state_{work_experience_count}']
            start_date_str = request.POST[f'start_date_{work_experience_count}']
            end_date_str = request.POST.get(f'end_date_{work_experience_count}', None)
            currently_working = 'currently_working_{work_experience_count}' in request.POST

            try:
                start_date = datetime.strptime(start_date_str, '%Y-%m-%d').date()
            except ValueError:
                return render(request, 'dashboard/create_resume_template.html', {'message': 'Invalid start date format'})

            if end_date_str:
                try:
                    end_date = datetime.strptime(end_date_str, '%Y-%m-%d').date()
                except ValueError:
                    return render(request, 'dashboard/create_resume_template.html', {'message': 'Invalid end date format'})
            else:
                end_date = None

            work_experience = ResumeTemplateWorkExperience.objects.create(
                resume_template=resume_template,
                company_name=company_name,
                job_title=job_title,
                city=city,
                state=state,
                start_date=start_date,
                end_date=end_date,
                currently_working=currently_working
            )

            bullet_point_count = 1
            while f'bullet_point_{work_experience_count}_{bullet_point_count}' in request.POST:
                content = request.POST[f'bullet_point_{work_experience_count}_{bullet_point_count}']
                ResumeTemplateWorkExperienceBulletPoint.objects.create(
                    work_experience=work_experience,
                    content=content
                )
                bullet_point_count += 1

            work_experience_count += 1

        return redirect('dashboard:dashboard_home')
    return render(request, 'dashboard/create_resume_template.html')

@login_required
def dashboard_resume_templates(request):
    resume_templates = ResumeTemplate.objects.all().order_by('-date_created')
    print(resume_templates)
    context =  {
        'resume_templates': resume_templates
    }
    return render(request, 'dashboard/resume_templates.html', context)

@login_required
def dashboard_resume_template_detail(request, resume_template_id):
    resume_template = get_object_or_404(ResumeTemplate, pk=resume_template_id)
    work_experiences = ResumeTemplateWorkExperience.objects.filter(resume_template=resume_template)
    context = {
        'resume_template': resume_template,
        'work_experiences': work_experiences
    }

    return render(request, 'dashboard/resume_template_detail.html', context)

def dashboard_logout(request):
    logout(request)
    return redirect('accounts:home')
