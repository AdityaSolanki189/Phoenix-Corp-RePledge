from django.db import models

# Create your models here.
class drive(models.Model):
    drive_name=models.CharField(max_length=500)
    category = models.CharField(max_length=200)
    location = models.CharField(max_length=500) 
    description = models.CharField(max_length=1000)
    number= models.CharField(max_length=10,default="")
    ngo = models.CharField(max_length=300,blank=True)
