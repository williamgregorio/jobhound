# accounts/urls.py
from django.urls import path
from .views import UserRegistrationAPIView, LoginView, UserLogoutAPIView

urlpatterns = [
    path('register/', UserRegistrationAPIView.as_view(), name='user-registration'),
    path('login/', LoginView.as_view(), name='user-login'),
    path('logout/', UserLogoutAPIView.as_view(), name='user-logout'),

]
