from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from .models import JobEntry

@login_required(login_url='accounts:login')
def dashboard_home(request):
    context = {
        'user_info': {
            'username': request.user.username
        }
    }
    return render(request, 'dashboard/index.html', context)

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

def dashboard_job_entries(request):
    job_entries = JobEntry.objects.filter(user=request.user)
    return render(request, 'dashboard/job_entries.html', {'job_entries': job_entries})

def dashboard_logout(request):
    logout(request)
    return redirect('accounts:home')
