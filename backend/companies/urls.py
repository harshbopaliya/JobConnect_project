
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IndustryViewSet, CompanyViewSet

router = DefaultRouter()
router.register('industries', IndustryViewSet)
router.register('', CompanyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
