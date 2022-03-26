from django.urls import path

from . import views

urlpatterns = [
    path('volunteer/', views.index, name='index'),
]