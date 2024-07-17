from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

def home(request):
    return render(request, 'accounts/index.html')

def signup_view(request):
    if request.user.is_authenticated:
        return redirect('dashboard:dashboard_home')

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = User.objects.create_user(username=username, password=password)
        user.save()
        if user is not None:
            login(request, user)
            return redirect('dashboard:dashboard_home')
        else:
            return render(request, 'accounts/signup.html', {'error': 'Username already exist.'})
        return redirect('accounts:home')
    return render(request, 'accounts/signup.html')

def login_view(request):
    if request.user.is_authenticated:
        return redirect('dashboard:dashboard_home')

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard:dashboard_home')
        else:
            return render(request, 'accounts/login.html', {'error': 'Invalid username or password.'})
    return render(request, 'accounts/login.html')
