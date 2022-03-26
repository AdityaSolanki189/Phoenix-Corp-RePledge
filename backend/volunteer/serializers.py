from rest_framework import serializers
from .models import volunteer

class volunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = volunteer 
        # fields = ['id','item_name','quantity','location','category']
        fields = "__all__"