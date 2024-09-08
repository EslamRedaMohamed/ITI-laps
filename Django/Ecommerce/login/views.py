from django.shortcuts import render,redirect
from .models import Login

# Create your views here.
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        # print(f"username is {username} and password is {password}")
        lg = Login(username=username, password=password)
        lg.save()
        return redirect('products')
        
        
    return render(request, 'login/login.html')