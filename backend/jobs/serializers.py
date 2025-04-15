
from rest_framework import serializers
from .models import JobCategory, Skill, Job, JobApplication, SavedJob
from companies.serializers import CompanySerializer

class JobCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobCategory
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class JobSerializer(serializers.ModelSerializer):
    company_name = serializers.ReadOnlyField(source='company.name')
    company_logo = serializers.ImageField(source='company.logo', read_only=True)
    is_expired = serializers.SerializerMethodField()
    is_saved = serializers.SerializerMethodField()
    category_name = serializers.ReadOnlyField(source='category.name')
    skills_list = SkillSerializer(source='skills', many=True, read_only=True)
    
    class Meta:
        model = Job
        fields = '__all__'
    
    def get_is_expired(self, obj):
        return obj.is_expired()
    
    def get_is_saved(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return SavedJob.objects.filter(job=obj, user=request.user).exists()
        return False

class JobDetailSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    is_expired = serializers.SerializerMethodField()
    is_saved = serializers.SerializerMethodField()
    category = JobCategorySerializer(read_only=True)
    skills = SkillSerializer(many=True, read_only=True)
    application_count = serializers.SerializerMethodField()
    has_applied = serializers.SerializerMethodField()
    
    class Meta:
        model = Job
        fields = '__all__'
    
    def get_is_expired(self, obj):
        return obj.is_expired()
    
    def get_is_saved(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return SavedJob.objects.filter(job=obj, user=request.user).exists()
        return False
    
    def get_application_count(self, obj):
        return obj.applications.count()
    
    def get_has_applied(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return JobApplication.objects.filter(job=obj, applicant=request.user).exists()
        return False

class JobApplicationSerializer(serializers.ModelSerializer):
    applicant_name = serializers.ReadOnlyField(source='applicant.get_full_name')
    job_title = serializers.ReadOnlyField(source='job.title')
    
    class Meta:
        model = JobApplication
        fields = '__all__'
        read_only_fields = ('applicant', 'status')

class SavedJobSerializer(serializers.ModelSerializer):
    job = JobSerializer(read_only=True)
    
    class Meta:
        model = SavedJob
        fields = '__all__'
        read_only_fields = ('user',)
