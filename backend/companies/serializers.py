from rest_framework import serializers
from .models import Industry, Company, CompanyReview, Benefit, Culture

class BenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefit
        fields = '__all__'

class CultureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Culture
        fields = '__all__'

class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    industry_name = serializers.ReadOnlyField(source='industry.name')
    job_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Company
        fields = '__all__'
    
    def get_job_count(self, obj):
        # Assuming there's a related jobs model not shown in the files
        return obj.jobs.count() if hasattr(obj, 'jobs') else 0

class CompanyDetailSerializer(serializers.ModelSerializer):
    industry = IndustrySerializer(read_only=True)
    job_count = serializers.SerializerMethodField()
    review_count = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()
    benefits = BenefitSerializer(many=True, read_only=True)
    culture = CultureSerializer(many=True, read_only=True)
    
    class Meta:
        model = Company
        fields = '__all__'
    
    def get_job_count(self, obj):
        return obj.jobs.count() if hasattr(obj, 'jobs') else 0
    
    def get_review_count(self, obj):
        return obj.reviews.count()
    
    def get_average_rating(self, obj):
        reviews = obj.reviews.all()
        if reviews:
            return sum(review.rating for review in reviews) / reviews.count()
        return 0

class CompanyReviewSerializer(serializers.ModelSerializer):
    reviewer_name = serializers.ReadOnlyField(source='user.get_full_name')
    
    class Meta:
        model = CompanyReview
        fields = '__all__'
        read_only_fields = ('user',)
    
    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)