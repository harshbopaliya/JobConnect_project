from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, get_user_model
from .models import JobSeekerProfile, EmployerProfile
from companies.models import Company
from .serializers import (
    UserSerializer,
    JobSeekerProfileSerializer,
    EmployerProfileSerializer,
    LoginSerializer
)

User = get_user_model()


# RegisterView: Public access
class RegisterView(APIView):
    # Keep AllowAny for public access
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()

            # Create profile based on user type
            if user.user_type == 'jobseeker':
                JobSeekerProfile.objects.create(user=user)
            elif user.user_type == 'employer':
                company_id = request.data.get('company_id')
                if company_id:
                    try:
                        company = Company.objects.get(id=company_id)
                        EmployerProfile.objects.create(
                            user=user, company=company)
                    except Company.DoesNotExist:
                        user.delete()
                        return Response(
                            {"error": "Company not found"},
                            status=status.HTTP_400_BAD_REQUEST
                        )
                else:
                    user.delete()
                    return Response(
                        {"error": "Company ID is required for employer registration"},
                        status=status.HTTP_400_BAD_REQUEST
                    )

            # Generate tokens
            refresh = RefreshToken.for_user(user)
            return Response({
                "user": user_serializer.data,
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            }, status=status.HTTP_201_CREATED)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# LoginView: Public access
class LoginView(APIView):
    # Keep AllowAny for public access
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, username=email, password=password)

            if user:
                refresh = RefreshToken.for_user(user)
                user_data = UserSerializer(user).data
                return Response({
                    "user": user_data,
                    "refresh": str(refresh),
                    "access": str(refresh.access_token)
                })
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# For other views (Profile Views), restrict access to authenticated users only:
class JobSeekerProfileView(APIView):
    # Restrict to authenticated users
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            profile = JobSeekerProfile.objects.get(user=request.user)
            serializer = JobSeekerProfileSerializer(profile)
            return Response(serializer.data)
        except JobSeekerProfile.DoesNotExist:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        try:
            profile = JobSeekerProfile.objects.get(user=request.user)
            serializer = JobSeekerProfileSerializer(
                profile, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JobSeekerProfile.DoesNotExist:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)


class EmployerProfileView(APIView):
    # Restrict to authenticated users
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            profile = EmployerProfile.objects.get(user=request.user)
            serializer = EmployerProfileSerializer(profile)
            return Response(serializer.data)
        except EmployerProfile.DoesNotExist:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        try:
            profile = EmployerProfile.objects.get(user=request.user)
            serializer = EmployerProfileSerializer(
                profile, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except EmployerProfile.DoesNotExist:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
