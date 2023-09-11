from rest_framework import viewsets
from .models import PersonalInformation, Resume
from .serializers import PersonalInformationSerializer, ResumeSerializer

class PersonalInformationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PersonalInformation.objects.all()
    serializer_class = PersonalInformationSerializer

class ResumeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer