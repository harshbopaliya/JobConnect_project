from rest_framework import viewsets
from rest_framework.permissions import AllowAny  # 👈 This line
from .models import TeamMember, Stat, CoreValue
from .serializers import TeamMemberSerializer, StatSerializer, CoreValueSerializer


class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    permission_classes = [AllowAny]  # 👈 This is what makes it public


class StatViewSet(viewsets.ModelViewSet):
    queryset = Stat.objects.all()
    serializer_class = StatSerializer
    permission_classes = [AllowAny]


class CoreValueViewSet(viewsets.ModelViewSet):
    queryset = CoreValue.objects.all()
    serializer_class = CoreValueSerializer
    permission_classes = [AllowAny]
