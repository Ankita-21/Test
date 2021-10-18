from django.contrib import admin
from django.urls import path
from home import views 

urlpatterns = [
    path("",views.intro,name='home'),
    path("signup",views.signup,name='signup'),
    path("homepage",views.homepage,name='homepage'),
    path("login",views.login,name='login'),
    path("contact",views.contact,name='contact'),
    path("logout",views.intro,name=' '),    
]