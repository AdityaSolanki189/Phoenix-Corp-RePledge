from rest_framework import serializers
from .models import donate,tracker

class donateSerializer(serializers.ModelSerializer):
    class Meta:
        model = donate 
        # fields = ['id','item_name','quantity','location','category']
        fields = "__all__"  

class trackerSerializer(serializers.ModelSerializer):
    class Meta:
        model=tracker
        fields = "__all__"