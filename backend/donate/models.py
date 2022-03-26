from django.db import models
from django.core.validators import MaxLengthValidator
from datetime import *
from django.db.models.signals import post_save

# Create your models here.
class donate(models.Model):
    name= models.CharField(max_length=200,default="")
    number= models.CharField(max_length=10,default=0)
    item_name = models.CharField(max_length=200)
    quantity = models.IntegerField()
    category = models.CharField(max_length=200)
    pickup = models.DateField(auto_now_add=False)
    ngo = models.CharField(max_length=300,blank=True)
    location = models.CharField(max_length=500) 
    location_link = models.URLField(max_length=500,blank=True)
    def __str__(self) -> str:
        return self.name

class tracker(models.Model):
    choices = (
        ("OP", "Order Placed"),
        ("IT", "In Transit"),
        ("OT", "Output Delivery"),
        ("DE", "Delivery"),
    )
    donate = models.ForeignKey(donate,on_delete=models.CASCADE,related_name="tracker")
    desc = models.CharField(max_length=256,blank=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=2,choices=choices,default="OP")
    def __str__(self) -> str:
        return self.donate.name + " " + self.status
def post_save_tracker_model_receiver(sender, instance, created, *args, **kwargs):
    if created:
        try:
            tracker.objects.create(donate=instance,desc="donation request received")
        except:
            pass
post_save.connect(post_save_tracker_model_receiver, sender=donate)
