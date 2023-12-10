from django.contrib import admin
from .models import SocialMedia, PersonalInformation, WorkExperienceBulletPoint, WorkExperience, Education, Skill, Certification, ResumeInformation, Resume

# Register your models here
admin.site.register(SocialMedia)
admin.site.register(PersonalInformation)
admin.site.register(WorkExperienceBulletPoint)

@admin.register(WorkExperience)
class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ('job_title', 'company_name', 'is_employed', 'employment_start_date', 'employment_end_date', 'employment_duration')
    list_filter = ('is_employed',)
    search_fields = ('job_title', 'company_name', 'roles')
    filter_horizontal = ('bullet_points',)
    readonly_fields = ('employment_duration',)

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('school_name', 'graduation_year')
    search_fields = ('school_name',)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'skill_type')
    list_filter = ('skill_type',)
    search_fields = ('name',)

admin.site.register(Certification)

@admin.register(ResumeInformation)
class ResumeInformationAdmin(admin.ModelAdmin):
    list_display = ('personal_information', 'brief_summary')
    filter_horizontal = ('work_experiences', 'educations', 'certifications')

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('resume_name', 'created_at', 'updated_at')
    search_fields = ('resume_name',)
