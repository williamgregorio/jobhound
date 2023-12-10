from rest_framework import viewsets
from .models import Resume
from .serializers import ResumeSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

