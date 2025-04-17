from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, JobSeekerProfile, EmployerProfile

class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'username', 'first_name', 'last_name', 'user_type', 'is_staff')
    list_filter = ('user_type', 'is_staff', 'is_active')
    search_fields = ('email', 'username', 'first_name', 'last_name')
    ordering = ('email',)
    
    # Add fieldsets for UserAdmin to work properly with custom User model
    fieldsets = UserAdmin.fieldsets + (
        ('Custom Fields', {'fields': ('user_type', 'profile_picture', 'phone_number')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Custom Fields', {'fields': ('email', 'user_type', 'profile_picture', 'phone_number')}),
    )

class JobSeekerProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'experience_years', 'location', 'created_at')
    search_fields = ('user__email', 'user__username', 'skills', 'location')
    list_filter = ('experience_years',)

class EmployerProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'company', 'position', 'department', 'created_at')
    search_fields = ('user__email', 'user__username', 'company__name', 'position')
    list_filter = ('company',)

admin.site.register(User, CustomUserAdmin)
admin.site.register(JobSeekerProfile, JobSeekerProfileAdmin)
admin.site.register(EmployerProfile, EmployerProfileAdmin)
