from django.db import models

# Create your models here.
class volunteer(models.Model):
    name=models.CharField(max_length=200)
    number=models.CharField(max_length=10)
    location=models.CharField(max_length=200) 
    time=models.IntegerField()
    job=models.CharField(max_length=200)