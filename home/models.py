from django.db import models

# Create your models here.
class User (models.Model):
    name = models.CharField(max_length=122,default="name", editable=False,null=True)
    email = models.CharField(max_length=122,default="email", editable=False,null=True)
    password = models.CharField(max_length=100,default="password", editable=False,null=True)


class Contact(models.Model):
    id = models.AutoField(primary_key=True,default="1",null=False)
    name = models.CharField(max_length=122,default="name", editable=False,null=True)
    phone = models.CharField(max_length=12,default="phone", editable=False,null=True)
    desc = models.TextField(max_length=200,default="desc", editable=False,null=True)
    date = models.DateField(default="date", editable=False,null=True)

def __str__(self):
    if self.name==None:
       return "ERROR-NAME IS NULL"
    return self.name