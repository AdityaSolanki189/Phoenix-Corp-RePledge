from rest_framework import serializers
from .models import drive

class driveSerializer(serializers.ModelSerializer):
    class Meta:
        model = drive 
        # fields = ['id','item_name','quantity','location','category']
        fields = "__all__" 