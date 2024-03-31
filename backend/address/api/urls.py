from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AddresstViewsSet

address_router = DefaultRouter()
address_router.register(r'address', AddresstViewsSet)