from django.db import models

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='team/', blank=True, null=True)

class Stat(models.Model):
    icon = models.CharField(max_length=100)
    value = models.CharField(max_length=100)
    label = models.CharField(max_length=100)

class CoreValue(models.Model):
    icon = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField()
