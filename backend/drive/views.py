from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt

# serialization imports
from django.core import serializers
from .serializers import driveSerializer

# rest_framework imports
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import json

from .models import drive
# Create your views here.

@api_view(["GET","POST"])
def index(request):
    if request.method == 'GET':
        serializer1 = driveSerializer(drive.objects.all(), many=True)
        return Response(serializer1.data)

    elif request.method == 'POST':
        serializer1 = driveSerializer(data=request.data)
        if serializer1.is_valid():
            serializer1.save()

            return Response(serializer1.data, status=status.HTTP_201_CREATED)

        return Response(serializer1.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET","PUT","DELETE"])
def details(request, pk):
    try: 
        drive1 = drive.objects.get(pk=pk)

    except drive.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = driveSerializer(drive1)
        return Response(serializer.data) 
    
    elif request.method == 'PUT': 
        serializer = driveSerializer(drive1, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE': 
        drive1.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 

@api_view(["GET"])
def filter(request,loc):

    if request.method == 'GET':

        try:
            drive1 =drive.objects.filter(location=loc)

            serializer= driveSerializer(drive1, many=True)
            return Response(serializer.data,status=200)

        except: 
            return Response("something went wrong",status=400) 

