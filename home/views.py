from datetime import datetime
from django.contrib import messages
from django.shortcuts import redirect, render
from django.contrib.auth.models import User,auth
from django.contrib.auth import logout, authenticate, login
from home.models import Contact
# Create your views here.
def intro (request): 
    return render(request,'intro.html')

#def signup (request): 
 #   if request.method=="POST":
  #      username = request.POST.get('username')
       # username=request.POST.get("username", "default user")
   #     email = request.POST.get('email')       
    #    password = request.POST.get('password')
        #password2 = request.POST.get('password')
     #   user = User.objects.create_user(username=username,email=email,password=password)
      #  user.save();
       # print("User added successfully") 
        #return redirect(request, 'homepage.html')
   # else:
    #    return render(request, 'signup.html')
def signup(request):
 #   if request.method == "GET":
        return render(request,'signup.html')
   # else:
    #    """ signup logic """
     #   username,_ =  request.POST.get('email').split("@")
      #  is_exist = User.objects.filter(username = username).exists()
       # if is_exist:
        #    print("user already exist")
         #   context={"messages":"user already exist"}
          #  return render(request,'login.html',context=context)
       # else:
        #    user = User.objects.create_user(username=username.POST["username"],email = request.POST["email"],password=request.POST["password"])
         #   print("user",user)
          #  context={"messages": "Welcome {user} sign up successfully."}
           # return render(request,'homepage.html',context=context)

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name',null=True)
        phone = request.POST.get('phone',null=True)
        desc = request.POST.get('desc',null=True)
        contact = Contact(name=name, phone=phone, desc=desc,date=datetime.today())
        contact.save()
        print(name)
        print(phone)
        print(desc) 
        messages.success(request, 'Your message has been sent!')
    return render(request, 'contact.html')

def login (request):
    if request.method=="POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        print(email, password)

        # check if user has entered correct credentials
        user = authenticate(email=email, password=password)

        if user is not None:
            # A backend authenticated the credentials
            login(request, user)
            return redirect("/signup")

        else:
            # No backend authenticated the credentials
            return render(request, 'homepage.html')

    return render(request,'login.html')

def logout (request): 
    logout(request)
    return redirect("/")

def homepage (request):
    username = request.POST.get('username')
    email = request.POST.get('email')
    password = request.POST.get('password')
    return render(request,'homepage.html',{'username':username,'email':email, 'password':password})