from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

login_required(login_url='accounts:login')
def dashboard_home(request):
    return render(request, 'dashboard/index.html')
