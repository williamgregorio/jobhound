from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import JobEntry

@login_required(login_url='accounts:login')
def dashboard_home(request):
    context = {
        'user_info': {
            'username': request.user.username
        }
    }
    return render(request, 'dashboard/index.html', context)
