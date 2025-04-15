
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, get_user_model
from .models import JobSeekerProfile, EmployerProfile
from .serializers import (
    UserSerializer, 
    JobSeekerProfileSerializer, 
    EmployerProfileSerializer,
    LoginSerializer
)
from companies.models import Company

User = get_user_model()

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            
            # Create profile based on user type
            if user.user_type == 'jobseeker':
                JobSeekerProfile.objects.create(user=user)
            elif user.user_type == 'employer':
                # Check if company_id is provided
                company_id = request.data.get('company_id')
                if company_id:
                    try:
                        company = Company.objects.get(id=company_id)
                        EmployerProfile.objects.create(user=user, company=company)
                    except Company.DoesNotExist:
                        user.delete()
                        return Response(
                            {"error": "Company not found"},
                            status=status.HTTP_400_BAD_REQUEST
                        )
                else:
                    # If company_id is not provided, return error
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

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            
            user = authenticate(request, username=email, password=password)
            
            if user is not None:
                refresh = RefreshToken.for_user(user)
                user_serializer = UserSerializer(user)
                
                return Response({
                    "user": user_serializer.data,
                    "refresh": str(refresh),
                    "access": str(refresh.access_token)
                })
            else:
                return Response(
                    {"error": "Invalid credentials"},
                    status=status.HTTP_401_UNAUTHORIZED
                )
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobSeekerProfileView(APIView):
    def get(self, request):
        try:
            profile = JobSeekerProfile.objects.get(user=request.user)
            serializer = JobSeekerProfileSerializer(profile)
            return Response(serializer.data)
        except JobSeekerProfile.DoesNotExist:
            return Response(
                {"error": "Profile not found"},
                status=status.HTTP_404_NOT_FOUND
            )
    
    def put(self, request):
        try:
            profile = JobSeekerProfile.objects.get(user=request.user)
            serializer = JobSeekerProfileSerializer(profile, data=request.data, partial=True)
            
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        except JobSeekerProfile.DoesNotExist:
            return Response(
                {"error": "Profile not found"},
                status=status.HTTP_404_NOT_FOUND
            )

class EmployerProfileView(APIView):
    def get(self, request):
        try:
            profile = EmployerProfile.objects.get(user=request.user)
            serializer = EmployerProfileSerializer(profile)
            return Response(serializer.data)
        except EmployerProfile.DoesNotExist:
            return Response(
                {"error": "Profile not found"},
                status=status.HTTP_404_NOT_FOUND
            )
    
    def put(self, request):
        try:
            profile = EmployerProfile.objects.get(user=request.user)
            serializer = EmployerProfileSerializer(profile, data=request.data, partial=True)
            
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        except EmployerProfile.DoesNotExist:
            return Response(
                {"error": "Profile not found"},
                status=status.HTTP_404_NOT_FOUND
            )
