from django.urls import path

from . import views

urlpatterns = [
    path('drive/', views.index, name='index'),
    path('drive/<int:pk>/',views.details, name="details"),
    path('drive/filter/<loc>/',views.filter, name="filter")

]