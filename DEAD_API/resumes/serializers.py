from rest_framework import serializers
from .models import SocialMedia,PersonalInformation,WorkExperienceBulletPoint ,WorkExperience, Education, Skill, Certification, Resume, ResumeInformation


class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMedia
        fields = '__all__'

class PersonalInformationSerializer(serializers.ModelSerializer):
    social_media_accounts = SocialMediaSerializer(many=True, required=False)
    class Meta:
        model = PersonalInformation
        fields = '__all__'

class WorkExperienceBulletPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperienceBulletPoint
        fields = '__all__'

class WorkExperienceSerializer(serializers.ModelSerializer):
    bullet_points = WorkExperienceBulletPointSerializer(many=True, required=False)
    class Meta:
        model = WorkExperience
        fields = '__all__'
        extra_kwargs = {
            'employment_end_date': {'allow_null': True},
            'employment_duration': {'allow_null': True},
        }

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'


class ResumeInformationSerializer(serializers.ModelSerializer):
    educations = EducationSerializer(many=True, required=False)
    certifications = CertificationSerializer(many=True, required=False)
    skills = SkillSerializer(many=True, required=False)
    work_experiences = WorkExperienceSerializer(many=True, required=False)
    personal_information = PersonalInformationSerializer()
    class Meta:
        model = ResumeInformation
        fields = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    resume_information = ResumeInformationSerializer()

    class Meta:
        model = Resume
        fields = '__all__'
