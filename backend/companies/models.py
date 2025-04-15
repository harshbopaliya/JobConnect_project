
from django.db import models

class Industry(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Industries"

class Company(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='company_logos/', blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    industry = models.ForeignKey(Industry, on_delete=models.SET_NULL, null=True, related_name='companies')
    description = models.TextField()
    employee_count_choices = (
        ('1-10', '1-10'),
        ('11-50', '11-50'),
        ('51-200', '51-200'),
        ('201-500', '201-500'),
        ('501-1000', '501-1000'),
        ('1001-5000', '1001-5000'),
        ('5000+', '5000+'),
    )
    employee_count = models.CharField(max_length=10, choices=employee_count_choices, default='1-10')
    location = models.CharField(max_length=100)
    founded_year = models.PositiveIntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Companies"

class CompanyReview(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()  # 1-5
    title = models.CharField(max_length=100)
    pros = models.TextField()
    cons = models.TextField()
    review_date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.title} - {self.company.name}"
