from django.urls import path

from . import views

urlpatterns = [
    path('volunteer/', views.index, name='index'),
    path('volunteer/<int:pk>',views.details, name='details')
]