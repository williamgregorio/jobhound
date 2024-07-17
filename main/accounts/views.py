from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login


def home(request):
    return render(request, 'accounts/index.html')

def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        #creation on objects - basic User

        return redirect('accounts:home')
    return render(request, 'accounts/signup.html')

def login(request):
    return render(request, 'accounts/login.html')
