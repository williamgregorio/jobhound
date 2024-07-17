from django.db import models
from django.contrib.auth.models import User

class JobEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='job_entries')
    company_name = models.CharField(max_length=255)
    job_post_url = models.URLField()
    date_created = models.DateTimeField(auto_now_add=True)
    applied = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user.username} - {self.company}"
    
    class Meta:
        ordering = ['-date_created']
