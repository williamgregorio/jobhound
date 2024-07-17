from django.db import models
from django.contrib.auth.models import User

class JobEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='job_entries')
    company_name = models.CharField(max_length=255)
    job_post_url = models.URLField()
    date_created = models.DateTimeField(auto_now_add=True)
    applied = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user.username} - {self.company}"
    
    class Meta:
        ordering = ['-date_created']

class ResumeTemplate(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='resume_templates')
    date_created = models.DateTimeField(auto_now_add=True)
    template_name = models.CharField(max_length=150)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=42)
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=13)

    def __str__(self):
        return f"{self.template_name}"
    class Meta:
        ordering = ['-date_created']

class ResumeTemplateWorkExperience(models.Model):
    resume_template = models.ForeignKey(ResumeTemplate, on_delete=models.CASCADE, related_name='work_experiences')
    company_name = models.CharField(max_length=150)
    job_title = models.CharField(max_length=150)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=42)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    currently_working = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.resume_template.template_name} - {self.company_name} ({self.job_title})"


class ResumeTemplateWorkExperienceBulletPoint(models.Model):
    work_experience = models.ForeignKey(ResumeTemplateWorkExperience, on_delete=models.CASCADE, related_name='bullet_points')
    content = models.TextField()

    def __str__(self):
        return f"{self.work_experience.resume_template.template_name} - {self.content}"
