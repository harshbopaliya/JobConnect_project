
from django.contrib import admin
from .models import JobCategory, Skill, Job, JobApplication, SavedJob

class JobCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name', 'description')

class SkillAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'location', 'is_remote', 'job_type', 'experience_level', 'is_active', 'is_featured', 'created_at')
    list_filter = ('is_active', 'is_featured', 'job_type', 'experience_level', 'is_remote', 'created_at')
    search_fields = ('title', 'description', 'requirements', 'company__name', 'location')
    readonly_fields = ('created_at', 'updated_at')
    filter_horizontal = ('skills',)

class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ('job', 'applicant', 'status', 'applied_at', 'updated_at')
    list_filter = ('status', 'applied_at')
    search_fields = ('job__title', 'applicant__email', 'applicant__username')
    readonly_fields = ('applied_at', 'updated_at')

class SavedJobAdmin(admin.ModelAdmin):
    list_display = ('job', 'user', 'saved_at')
    list_filter = ('saved_at',)
    search_fields = ('job__title', 'user__email', 'user__username')
    readonly_fields = ('saved_at',)

admin.site.register(JobCategory, JobCategoryAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Job, JobAdmin)
admin.site.register(JobApplication, JobApplicationAdmin)
admin.site.register(SavedJob, SavedJobAdmin)
