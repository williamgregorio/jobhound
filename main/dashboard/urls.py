from django.urls import path
from . import views

app_name = 'dashboard'
urlpatterns = [
    path('', views.dashboard_home, name='dashboard_home'),
    path('create-job/', views.dashboard_create_job_entry, name='dashboard_create_job_entry'),
    path('job-entries/', views.dashboard_job_entries, name='dashboard_job_entries'),
    path('create-resume-template/', views.dashboard_create_resume_template, name='dashboard_create_resume_template'),
    path('resume-templates/', views.dashboard_resume_templates, name='dashboard_resume_templates'),
    path('resume-template/<int:resume_template_id>/', views.dashboard_resume_template_detail, name='dashboard_resume_template_detail'),
    path('logout/', views.dashboard_logout, name='dashboard_logout')
]
