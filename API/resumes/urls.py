from django.urls import path, include
from rest_framework import routers
from .views import ResumeViewSet, PersonalInformationViewSet

app_name = 'resumes'

router = routers.DefaultRouter()
router.register('/resumes', ResumeViewSet, basename='resumes-list')

urlpatterns = [
    path('', include(router.urls)),
]
