
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    JobCategoryViewSet,
    SkillViewSet,
    JobViewSet,
    JobApplicationViewSet,
    SavedJobViewSet,
)

router = DefaultRouter()
router.register('categories', JobCategoryViewSet)
router.register('skills', SkillViewSet)
router.register('applications', JobApplicationViewSet, basename='application')
router.register('saved', SavedJobViewSet, basename='saved')
router.register('', JobViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
