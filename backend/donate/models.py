from django.db import models
from django.core.validators import MaxLengthValidator, MinLengthValidator
from datetime import *

# Create your models here.
class donate(models.Model):
    name= models.CharField(max_length=200,default="")
    number= models.CharField(max_length=10,default="", validators=[MinLengthValidator(10),])
    item_name = models.CharField(max_length=200)
    quantity = models.IntegerField()
    category = models.CharField(max_length=200)
    pickup = models.DateField(auto_now_add=False)
    ngo = models.CharField(max_length=300,blank=True)
    apartment=models.CharField(max_length=300,default="")
    location = models.CharField(max_length=500) 
    location_link = models.URLField(max_length=500,blank=True)