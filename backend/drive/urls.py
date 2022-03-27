from django.urls import path

from . import views

urlpatterns = [
    path('drive/', views.index, name='index'),
    path('drive/<int:pk>/',views.details, name="details"),
    path('drive/filter/<ngo>/',views.filter, name="filter")

]