from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from datetime import date
class Profile(models.Model):
    # Basic Info
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200 , blank=True , null=True)
    tagline = RichTextUploadingField(blank=True)  # Rich text version
    short_bio = RichTextUploadingField(blank=True, help_text="Short professional summary or about text")

    # Contact Info
    email = models.EmailField()
    phone = models.CharField(max_length=20,  blank=True , null=True)
    location = models.CharField(max_length=100, blank=True , null=True)

    # Media
    photo = models.ImageField(upload_to='profile/', blank=True , null=True)
    cv = models.FileField(upload_to='cv/', blank=True , null=True)
    logo = models.ImageField(upload_to='logo/', blank=True , null=True)

    # Portfolio URLs (optional but recommended)
    linkedin_url = models.URLField( blank=True , null=True)
    github_url = models.URLField( blank=True , null=True)
    website_url = models.URLField( blank=True , null=True)
    twitter_url = models.URLField( blank=True , null=True)
    facebook_url = models.URLField( blank=True , null=True)
    youtube_url = models.URLField( blank=True , null=True)
    medium_url = models.URLField( blank=True , null=True)
    researchgate_url = models.URLField( blank=True , null=True)
    scholar_url = models.URLField(blank=True , null=True)

    # SEO & Customization
    slug = models.SlugField(unique=True, help_text="Unique URL identifier, e.g. rafit-alavi")
    meta_description = models.CharField(max_length=160, blank=True, help_text="SEO meta description")

    # System Fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse('profile_detail', kwargs={'slug': self.slug})
    


class Skill(models.Model):
    TECHNICAL = 'technical'
    SOFT = 'soft'
    SKILL_TYPES = [
        (TECHNICAL, 'Technical'),
        (SOFT, 'Soft'),
    ]

    name = models.CharField(max_length=100)
    skill_type = models.CharField(max_length=20, choices=SKILL_TYPES, default=TECHNICAL)
    proficiency = models.PositiveIntegerField(default=0)  # 0–100, positive only
    category = models.CharField(max_length=50, blank=True, help_text="Optional group like Frontend, Backend, QA, etc.")
    order = models.PositiveIntegerField(default=0)
    icon = models.CharField(max_length=255, blank=True, help_text="Optional: store icon class (e.g. fa-python, devicon-django-plain)")

    class Meta:
        ordering = ['order', 'name']
        verbose_name = "Skill"
        verbose_name_plural = "Skills"

    def __str__(self):
        return f"{self.name} ({self.skill_type})"





class Experience(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    company_website = models.URLField(blank=True, help_text="Optional: link to company website")
    location = models.CharField(max_length=100, blank=True, help_text="City or remote")
    
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    current = models.BooleanField(default=False, help_text="Check if this is your current position")

    description = RichTextUploadingField(blank=True, help_text="Detailed role description")
    achievements = models.JSONField(default=list, blank=True, help_text="List of key achievements or responsibilities")
    technologies = models.JSONField(default=list, blank=True, help_text="List of tools, languages, or frameworks used")

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-start_date', 'order']
        verbose_name = "Experience"
        verbose_name_plural = "Experiences"

    def __str__(self):
        return f"{self.position} at {self.company}"

    @property
    def duration(self):
        """Return a readable duration like 'Jan 2022 – Present'."""
        start = self.start_date.strftime("%b %Y")
        end = "Present" if self.current or not self.end_date else self.end_date.strftime("%b %Y")
        return f"{start} – {end}"

    def is_ongoing(self):
        """Convenience boolean for templates or serializers."""
        return self.current or self.end_date is None or self.end_date > date.today()
    

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = RichTextUploadingField(blank=True , null=True, help_text="Detailed description of the project")
    
    role = models.CharField(max_length=100, blank=True , null=True, help_text="Your role in this project, e.g., Developer, QA, Designer")
    owner = models.CharField(max_length=100,blank=True , null=True ,help_text="Project owner or company name")
    
    image = models.ImageField(upload_to='projects/', blank=True , null=True)
    technologies = models.JSONField(default=list, blank=True , null=True, help_text="List of technologies used")
    github_url = models.URLField(blank=True , null=True)
    live_url = models.URLField(blank=True , null=True)
    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    duration = models.CharField(max_length=100, blank=True , null=True, help_text="Project duration, e.g., Jan 2022 - Jun 2022")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    business_value = models.TextField(blank=True , null=True, help_text="Business value or impact of the project")
    status = models.CharField(max_length=50, blank=True , null=True, help_text="Project status, e.g., Completed, Ongoing")
    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.title


class Publication(models.Model):
    title = models.CharField(max_length=300)
    authors = models.JSONField(default=list, blank=True, help_text="List of authors")
    journal = models.CharField(max_length=200)
    publication_date = models.DateField()
    doi = models.CharField(max_length=100, blank=True)
    link = models.URLField(blank=True)
    abstract = RichTextUploadingField(blank=True, help_text="Optional abstract or summary")
    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-publication_date', 'order']
        verbose_name = "Publication"
        verbose_name_plural = "Publications"

    def __str__(self):
        return self.title



class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"Message from {self.name}"
    

from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

class Service(models.Model):
    title = models.CharField(max_length=200, help_text="Service name, e.g., Web Development")
    description = RichTextUploadingField(blank=True, help_text="Detailed description of the service")
    icon = models.CharField(max_length=50, blank=True, help_text="Optional: font-awesome or devicon class for icon")
    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Service"
        verbose_name_plural = "Services"

    def __str__(self):
        return self.title


class Education(models.Model):
    degree = models.CharField(max_length=200 , help_text="Degree or certification name, e.g., B.Sc. in Computer Science" )
    institution = models.CharField(max_length=200 , blank=True , null=True, help_text="Name of the educational institution")
    location = models.CharField(max_length=100 , blank=True , null=True, help_text="City or location of the institution")
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    grade = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True , null=True, help_text="Additional details about the education") 
    
    def __str__(self):
        return f"{self.degree} at {self.institution}"




class Certification(models.Model):
    title = models.CharField(max_length=255)
    issuer = models.CharField(max_length=255)
    
    credential_id = models.CharField(max_length=100, blank=True , null=True)
    credential_url = models.URLField(blank=True , null=True)
    description = models.TextField(blank=True , null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return f"{self.title} - {self.issuer}"
