from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt

from django.core import serializers
from .serializers import volunteerSerializer

from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import json
from .models import volunteer

@api_view(["GET","POST"])
def index(request):
    if request.method == 'GET':
        serializer1 = volunteerSerializer(volunteer.objects.all(), many=True)
        return Response(serializer1.data)

    elif request.method == 'POST':
        serializer1 = volunteerSerializer(data=request.data)
        if serializer1.is_valid():
            serializer1.save()

            return Response(serializer1.data, status=status.HTTP_201_CREATED)

        return Response(serializer1.errors, status=status.HTTP_400_BAD_REQUEST) 

@api_view(["GET","PUT","DELETE"])
def details(request, pk):
    try: 
        volunteer1 = volunteer.objects.get(pk=pk)

    except volunteer.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = volunteerSerializer(volunteer1)
        return Response(serializer.data) 
    
    elif request.method == 'PUT': 
        serializer = volunteerSerializer(volunteer1, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE': 
        volunteer1.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
