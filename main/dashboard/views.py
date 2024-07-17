from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from .models import JobEntry

@login_required(login_url='accounts:login')
def dashboard_home(request):
    context = {
        'user_info': {
            'username': request.user.username
        }
    }
    return render(request, 'dashboard/index.html', context)

def dashboard_logout(request):
    logout(request)
    return redirect('accounts:home')
