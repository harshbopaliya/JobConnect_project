
from django.contrib import admin
from .models import Industry, Company, CompanyReview

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'industry', 'location', 'employee_count', 'created_at')
    list_filter = ('industry', 'employee_count')
    search_fields = ('name', 'description', 'location')
    readonly_fields = ('created_at', 'updated_at')

class IndustryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name', 'description')

class CompanyReviewAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'user', 'rating', 'review_date')
    list_filter = ('rating', 'review_date')
    search_fields = ('title', 'pros', 'cons', 'company__name', 'user__email')
    readonly_fields = ('review_date',)

admin.site.register(Industry, IndustryAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(CompanyReview, CompanyReviewAdmin)
