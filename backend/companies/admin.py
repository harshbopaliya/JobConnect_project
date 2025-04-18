from django.contrib import admin
from .models import Industry, Company, CompanyReview, Benefit, Culture

# Inline admin classes to edit Benefits & Culture directly in Company admin
class BenefitInline(admin.TabularInline):
    model = Benefit
    extra = 1

class CultureInline(admin.TabularInline):
    model = Culture
    extra = 1

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'industry', 'location', 'employee_count', 'created_at')
    list_filter = ('industry', 'employee_count')
    search_fields = ('name', 'description', 'location')
    readonly_fields = ('created_at', 'updated_at')
    inlines = [BenefitInline, CultureInline]  # 👈 Add inline models here

class IndustryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name', 'description')

class CompanyReviewAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'user', 'rating', 'review_date')
    list_filter = ('rating', 'review_date')
    search_fields = ('title', 'pros', 'cons', 'company__name', 'user__email')
    readonly_fields = ('review_date',)

# Register all models
admin.site.register(Industry, IndustryAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(CompanyReview, CompanyReviewAdmin)
admin.site.register(Benefit)  # Optional if not inline
admin.site.register(Culture)  # Optional if not inline
