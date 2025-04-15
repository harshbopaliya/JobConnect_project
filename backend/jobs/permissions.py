
from rest_framework import permissions

class IsEmployerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow employers to create/edit jobs.
    """
    
    def has_permission(self, request, view):
        # Read permissions are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # Write permissions are only allowed to employers
        return request.user.is_authenticated and request.user.user_type == 'employer'
    
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # Only employers from the job's company can edit
        if not (request.user.is_authenticated and request.user.user_type == 'employer'):
            return False
        
        try:
            company = request.user.employer_profile.company
            return obj.company == company
        except:
            return False

class IsJobApplicant(permissions.BasePermission):
    """
    Custom permission to only allow job applicants to delete their applications.
    """
    
    def has_object_permission(self, request, view, obj):
        # Only the applicant can delete their application
        return request.user.is_authenticated and obj.applicant == request.user

class IsEmployerForJob(permissions.BasePermission):
    """
    Custom permission to only allow employers to update job applications for their company's jobs.
    """
    
    def has_object_permission(self, request, view, obj):
        # Only employers from the job's company can update application status
        if not (request.user.is_authenticated and request.user.user_type == 'employer'):
            return False
        
        try:
            company = request.user.employer_profile.company
            return obj.job.company == company
        except:
            return False
