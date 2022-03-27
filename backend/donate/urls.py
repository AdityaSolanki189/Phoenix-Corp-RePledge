from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('donate/', views.index, name='index'),
    path('donate/<int:pk>/',views.details, name="details"),
    path('donate/tracker/',views.tracking, name="tracker"),
    path('donate/filter/<name>/',views.filter, name="filter")
]