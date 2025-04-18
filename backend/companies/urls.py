from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IndustryViewSet, CompanyViewSet, CompanyReviewViewSet, BenefitViewSet, CultureViewSet

# Create a router and register your viewsets
router = DefaultRouter()
router.register('industries', IndustryViewSet)
router.register('companies', CompanyViewSet)
router.register('company-reviews', CompanyReviewViewSet)
router.register('benefits', BenefitViewSet)
router.register('culture', CultureViewSet)

urlpatterns = [
    path('', include(router.urls)),
]