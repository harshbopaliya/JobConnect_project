from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamMemberViewSet, StatViewSet, CoreValueViewSet

router = DefaultRouter()
router.register(r'team', TeamMemberViewSet)
router.register(r'stats', StatViewSet)
router.register(r'values', CoreValueViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
