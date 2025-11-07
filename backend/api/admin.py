from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.utils.html import format_html
from .models import Profile , Skill  , Experience , Project , Publication , ContactMessage , Service , Education , Certification



@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'institution', 'location', 'start_date', 'end_date', 'grade', 'is_ongoing')
    list_filter = ('institution', 'start_date', 'end_date')
    search_fields = ('degree', 'institution', 'location', 'description')
    ordering = ('-end_date', '-start_date')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('degree', 'institution', 'location')
        }),
        ('Dates', {
            'fields': ('start_date', 'end_date')
        }),
        ('Additional Information', {
            'fields': ('grade', 'description'),
            'classes': ('collapse',)  # Makes this section collapsible
        }),
    )
    
    def is_ongoing(self, obj):
        return obj.end_date is None
    is_ongoing.boolean = True
    is_ongoing.short_description = 'Ongoing'


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    # List view display
    list_display = ('name', 'title', 'email', 'location', 'photo_preview', 'is_active', 'updated_at')
    list_filter = ('is_active', 'created_at', 'updated_at')
    search_fields = ('name', 'title', 'email', 'location')

    # Auto-fill slug field from name
    prepopulated_fields = {'slug': ('name',)}

    # Read-only timestamps
    readonly_fields = ('created_at', 'updated_at')

    # Organize fields into logical sections
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'title', 'tagline', 'short_bio', 'photo', 'cv', 'logo')
        }),
        ('Contact Information', {
            'fields': ('email', 'phone', 'location')
        }),
        ('Online Presence', {
            'fields': (
                'linkedin_url', 'github_url', 'website_url', 'twitter_url',
                'facebook_url', 'youtube_url', 'medium_url',
                'researchgate_url', 'scholar_url'
            )
        }),
        ('SEO & Settings', {
            'fields': ('slug', 'meta_description', 'is_active')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
        }),
    )

    # Show photo preview in admin list
    def photo_preview(self, obj):
        if obj.photo:
            return format_html('<img src="{}" width="40" height="40" style="border-radius:50%; object-fit:cover;" />', obj.photo.url)
        return "-"
    photo_preview.short_description = 'Photo'


    class Media:
        # CKEditor or Summernote JS will load automatically via their apps
        pass


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    # Show these columns in the list view
    list_display = ('name', 'skill_type', 'category', 'proficiency_bar', 'order')
    list_filter = ('skill_type', 'category')
    search_fields = ('name', 'category')

    # Allow inline editing of order and proficiency
    list_editable = ('order',)

    # Default ordering
    ordering = ('skill_type', 'order')

    fieldsets = (
        ('Skill Information', {
            'fields': ('name', 'skill_type', 'category', 'proficiency', 'order' ,'icon')
        }),
    )

    def proficiency_bar(self, obj):
        """Visual progress bar in the admin list."""
        color = '#4CAF50' if obj.proficiency >= 70 else '#FFC107' if obj.proficiency >= 40 else '#F44336'
        return format_html(
            '<div style="background:#eee;width:100px;border-radius:4px;">'
            '<div style="width:{}%;background:{};height:8px;border-radius:4px;"></div>'
            '</div> <small>{}%</small>',
            obj.proficiency, color, obj.proficiency
        )
    proficiency_bar.short_description = 'Proficiency'





@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    # Columns shown in list view
    list_display = ('position', 'company', 'location', 'duration_display', 'current', 'order', 'is_active')
    list_filter = ('current', 'is_active', 'start_date')
    search_fields = ('position', 'company', 'location')
    list_editable = ('current', 'order', 'is_active')
    ordering = ('-start_date', 'order')

    # Organize fields into sections
    fieldsets = (
        ('Company & Role', {
            'fields': ('company', 'company_website', 'position', 'location')
        }),
        ('Dates & Status', {
            'fields': ('start_date', 'end_date', 'current', 'is_active')
        }),
        ('Details', {
            'fields': ('description', 'achievements', 'technologies', 'order')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

    # Make timestamps read-only
    readonly_fields = ('created_at', 'updated_at')

    def duration_display(self, obj):
        """Show human-readable duration in list view."""
        return obj.duration
    duration_display.short_description = 'Duration'

    class Media:
        # Rich text editor JS (CKEditor or Summernote) will auto-load
        pass


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    # Columns displayed in list view
    list_display = ('title', 'owner', 'role', 'featured', 'order', 'image_preview', 'created_at')
    list_filter = ('featured',)
    search_fields = ('title', 'owner', 'role', 'technologies')
    list_editable = ('featured', 'order')
    ordering = ('order', '-created_at')

    # Organize fields into sections
    fieldsets = (
        ('Project Info', {
            'fields': ('title', 'description', 'role', 'owner', 'image' )
        }),
        ('Links & Technologies', {
            'fields': ('technologies', 'github_url', 'live_url')
        }),
        ('Settings', {
            'fields': ('featured', 'order')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at','duration','business_value','status')
        }),
    )

    readonly_fields = ('created_at', 'updated_at')

    # Show image preview
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit:cover;border-radius:4px;" />',
                obj.image.url
            )
        return "-"
    image_preview.short_description = 'Image Preview'

    class Media:
        # CKEditor or Summernote JS will load automatically
        pass


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'featured', 'order', 'created_at')
    list_filter = ('featured',)
    search_fields = ('title', 'description')
    list_editable = ('featured', 'order')
    ordering = ('order', '-created_at')

    fieldsets = (
        ('Service Info', {
            'fields': ('title', 'description', 'icon')
        }),
        ('Settings', {
            'fields': ('featured', 'order')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

    readonly_fields = ('created_at', 'updated_at')

    class Media:
        # CKEditor/Summernote JS auto-loads for description field
        pass


# ---------- Publication Admin ----------
@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ('title', 'journal', 'publication_date', 'featured', 'order')
    list_filter = ('featured', 'publication_date')
    search_fields = ('title', 'journal', 'authors')
    list_editable = ('featured', 'order')
    ordering = ('-publication_date', 'order')

    fieldsets = (
        ('Publication Info', {
            'fields': ('title', 'authors', 'journal', 'publication_date', 'doi', 'link', 'abstract')
        }),
        ('Settings', {
            'fields': ('featured', 'order')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

    readonly_fields = ('created_at', 'updated_at')


# ---------- ContactMessage Admin ----------
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'read', 'created_at')
    list_filter = ('read', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    list_editable = ('read',)
    ordering = ('-created_at',)

    actions = ['mark_as_read']

    def mark_as_read(self, request, queryset):
        updated = queryset.update(read=True)
        self.message_user(request, f"{updated} message(s) marked as read.")
    mark_as_read.short_description = "Mark selected messages as read"


from django.contrib import admin
from .models import Certification

@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'issuer',
        'credential_id',
        'credential_url',
        'is_active',
        'order',
    )
    list_filter = ('is_active', 'issuer',)
    search_fields = ('title', 'issuer', 'credential_id')
    ordering = ('order', 'created_at')
    readonly_fields = ('created_at', 'updated_at')

    fieldsets = (
        ('Certification Info', {
            'fields': (
                'title',
                'issuer',
                
                'credential_id',
                'credential_url',
                'description',
            )
        }),
        ('Settings', {
            'fields': (
                'order',
                'is_active',
            )
        }),
        ('Timestamps', {
            'fields': (
                'created_at',
                'updated_at',
            ),
            'classes': ('collapse',),
        }),
    )

    class Media:
        css = {
            'all': ('admin/css/custom.css',)
        }
