from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'profile', views.ProfileViewSet, basename='profile')
router.register(r'skills', views.SkillViewSet, basename='skills')
router.register(r'experiences', views.ExperienceViewSet, basename='experiences')
router.register(r'projects', views.ProjectViewSet, basename='projects')
router.register(r'services', views.ServiceViewSet, basename='services')
router.register(r'publications', views.PublicationViewSet, basename='publications')
router.register(r'contact-messages', views.ContactMessageViewSet, basename='contact-messages')
router.register(r'education', views.EducationViewSet, basename='education')
router.register(r'certifications', views.CertificationViewSet, basename='certifications')



urlpatterns = [
    path('', include(router.urls)),
]