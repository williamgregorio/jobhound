from django.db import models
from datetime import datetime
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator
import uuid


class SocialMedia(models.Model):
    social_media_name = models.CharField(max_length=100)
    social_media_url = models.URLField()

    def __str__(self):
        return self.social_media_name

class PersonalInformation(models.Model):
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)
    social_media_accounts = models.ManyToManyField(SocialMedia, blank=True)
    def __str__(self):
        return self.first_name + " " + self.last_name


class WorkExperienceBulletPoint(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    bullet_point = models.CharField(max_length=250, blank=True)

    def __str__(self):
        return self.bullet_point

class WorkExperience(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    company_name = models.CharField(max_length=100, blank=True)
    company_url = models.URLField(blank=True)
    job_title = models.CharField(max_length=100, blank=True)
    employment_start_date = models.DateTimeField(blank=True, null=True)
    is_employed = models.BooleanField(default=False)
    employment_end_date = models.DateTimeField(blank=True, null=True)
    employment_duration = models.DurationField(blank=True, null=True)
    bullet_points = models.ManyToManyField(WorkExperienceBulletPoint, blank=True, related_name='+')


    def save(self, *args, **kwargs):
        if not self.is_employed:
            # If not employed, set employment_end_date to the same as employment_start_date
            self.employment_end_date = self.employment_start_date

        if self.employment_start_date and self.employment_end_date:
            # Calculate the employment_duration
            time_difference = self.employment_end_date - self.employment_start_date
            self.employment_duration = time_difference
        else:
            self.employment_duration = None

        super().save(*args, **kwargs)

    def __str__(self):
        return self.job_title + " " + self.company_name



class Education(models.Model):
    school_name = models.CharField(max_length=100, blank=True)
    graduation_year = models.IntegerField(null=True, blank=True, validators=[MinValueValidator(1000), MaxValueValidator(9999)])

    def validate_four_digits(self, value):
        if value is not None and (value < 1000 or value > 9999):
            raise ValidationError("Please enter a four-digit year.")

    def clean(self):
        super().clean()
        self.validate_four_digits(self.graduation_year)
    def __str__(self):
        return self.school_name


class Skill(models.Model):
    TECHNICAL_SKILL = 'Technical Skill'
    SOFT_SKILL = 'Soft Skill'
    SKILL_TYPE = [
        (TECHNICAL_SKILL, 'Technical Skill'),
        (SOFT_SKILL, 'Soft Skill'),
    ]
    name = models.CharField(max_length=100)
    skill_type = models.CharField(max_length=50, choices=SKILL_TYPE)
    def __str__(self):
        return self.name


class Certification(models.Model):
    certification_name = models.CharField(max_length=100)
    organization_name = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.certification_name


class ResumeInformation(models.Model):
    personal_information = models.OneToOneField(PersonalInformation, on_delete=models.CASCADE, blank=True, null=True)
    brief_summary = models.TextField(blank=True)
    work_experiences = models.ManyToManyField(WorkExperience, blank=True)
    educations = models.ManyToManyField(Education, blank=True)
    certifications = models.ManyToManyField(Certification, blank=True)
    skills = models.ManyToManyField(Skill, blank=True)
    def __str__(self):
        return self.personal_information.first_name + " " + self.personal_information.last_name

class Resume(models.Model):
    resume_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    resume_name = models.CharField(max_length=255)
    resume_information = models.OneToOneField(
        ResumeInformation,
        on_delete=models.CASCADE,  # This specifies what happens when a ResumeInformation is deleted.
        null=True,
        blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def save(self, *args, **kwargs):
        self.updated_at = datetime.now()

        if not self.created_at:
            self.created_at = self.updated_at

        super().save(*args, **kwargs)

    def __str__(self):
        return self.resume_name

