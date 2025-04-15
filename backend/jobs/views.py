
from rest_framework import viewsets, permissions, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from .models import JobCategory, Skill, Job, JobApplication, SavedJob
from .serializers import (
    JobCategorySerializer,
    SkillSerializer,
    JobSerializer,
    JobDetailSerializer,
    JobApplicationSerializer,
    SavedJobSerializer,
)
from .permissions import IsEmployerOrReadOnly, IsJobApplicant, IsEmployerForJob

class JobCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer
    permission_classes = [permissions.AllowAny]

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = JobSerializer
    permission_classes = [IsEmployerOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'company__name', 'skills__name']
    ordering_fields = ['created_at', 'application_deadline', 'salary_min', 'salary_max']
    
    def get_queryset(self):
        queryset = Job.objects.filter(is_active=True).order_by('-created_at')
        
        # Filter by category
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__id=category)
        
        # Filter by location
        location = self.request.query_params.get('location')
        if location:
            queryset = queryset.filter(location__icontains=location)
        
        # Filter by job type
        job_type = self.request.query_params.get('job_type')
        if job_type:
            queryset = queryset.filter(job_type=job_type)
        
        # Filter by experience level
        experience = self.request.query_params.get('experience')
        if experience:
            queryset = queryset.filter(experience_level=experience)
        
        # Filter by remote jobs
        remote = self.request.query_params.get('remote')
        if remote and remote.lower() == 'true':
            queryset = queryset.filter(is_remote=True)
        
        # Filter by salary range
        min_salary = self.request.query_params.get('min_salary')
        if min_salary:
            queryset = queryset.filter(salary_min__gte=min_salary)
        
        max_salary = self.request.query_params.get('max_salary')
        if max_salary:
            queryset = queryset.filter(salary_max__lte=max_salary)
        
        # Filter by skills
        skills = self.request.query_params.get('skills')
        if skills:
            skill_ids = [int(s) for s in skills.split(',')]
            queryset = queryset.filter(skills__id__in=skill_ids).distinct()
        
        # Filter by company
        company = self.request.query_params.get('company')
        if company:
            queryset = queryset.filter(company__id=company)
        
        # Featured jobs
        featured = self.request.query_params.get('featured')
        if featured and featured.lower() == 'true':
            queryset = queryset.filter(is_featured=True)
        
        # Search query
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) |
                Q(description__icontains=search) |
                Q(company__name__icontains=search) |
                Q(skills__name__icontains=search)
            ).distinct()
        
        return queryset
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return JobDetailSerializer
        return JobSerializer
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({'request': self.request})
        return context
    
    def perform_create(self, serializer):
        serializer.save(company=self.request.user.employer_profile.company)
    
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def apply(self, request, pk=None):
        job = self.get_object()
        
        # Check if user already applied for this job
        if JobApplication.objects.filter(job=job, applicant=request.user).exists():
            return Response(
                {"error": "You have already applied for this job"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check if user is a job seeker
        if request.user.user_type != 'jobseeker':
            return Response(
                {"error": "Only job seekers can apply for jobs"},
                status=status.HTTP_403_FORBIDDEN
            )
        
        serializer = JobApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(job=job, applicant=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def save_job(self, request, pk=None):
        job = self.get_object()
        user = request.user
        
        # Check if already saved
        if SavedJob.objects.filter(job=job, user=user).exists():
            return Response(
                {"error": "Job already saved"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        saved_job = SavedJob.objects.create(job=job, user=user)
        serializer = SavedJobSerializer(saved_job)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def unsave_job(self, request, pk=None):
        job = self.get_object()
        user = request.user
        
        try:
            saved_job = SavedJob.objects.get(job=job, user=user)
            saved_job.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except SavedJob.DoesNotExist:
            return Response(
                {"error": "Job was not saved"},
                status=status.HTTP_400_BAD_REQUEST
            )

class JobApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = JobApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        
        # If user is a job seeker, return their applications
        if user.user_type == 'jobseeker':
            return JobApplication.objects.filter(applicant=user)
        
        # If user is an employer, return applications for their company's jobs
        elif user.user_type == 'employer':
            company = user.employer_profile.company
            return JobApplication.objects.filter(job__company=company)
        
        # For other user types (or if profile doesn't exist)
        return JobApplication.objects.none()
    
    def get_permissions(self):
        if self.action in ['update', 'partial_update']:
            self.permission_classes = [IsEmployerForJob]
        elif self.action in ['destroy']:
            self.permission_classes = [IsJobApplicant]
        return super().get_permissions()
    
    @action(detail=True, methods=['post'], permission_classes=[IsEmployerForJob])
    def update_status(self, request, pk=None):
        application = self.get_object()
        status_value = request.data.get('status')
        
        # Validate status
        valid_statuses = [choice[0] for choice in JobApplication.STATUS_CHOICES]
        if status_value not in valid_statuses:
            return Response(
                {"error": f"Status must be one of: {', '.join(valid_statuses)}"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        application.status = status_value
        application.save()
        
        serializer = self.get_serializer(application)
        return Response(serializer.data)

class SavedJobViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = SavedJobSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return SavedJob.objects.filter(user=self.request.user).order_by('-saved_at')
