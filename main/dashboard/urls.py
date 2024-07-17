from django.urls import path
from . import views

app_name = 'dashboard'
urlpatterns = [
    path('', views.dashboard_home, name='dashboard_home'),
    path('logout/', views.dashboard_logout, name='dashboard_logout')
]
