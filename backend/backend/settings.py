from pathlib import Path
from django.utils.deprecation import MiddlewareMixin

# -----------------------------------
# BASE CONFIG
# -----------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-7cy1-g7wx01kc@(t4s#s&57d58w2i6n#fc$_3d1b=x6u56u&u8'

DEBUG = True

ALLOWED_HOSTS = ['*']


# -----------------------------------
# INSTALLED APPS
# -----------------------------------
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party
    'rest_framework',
    'corsheaders',
    'ckeditor',
    'ckeditor_uploader',

    # Local apps
    'api',
]


# -----------------------------------
# MIDDLEWARE
# -----------------------------------
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',          # must be first
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'backend.settings.CORSMediaMiddleware',           # ✅ custom fix for media CORS
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# -----------------------------------
# URLS / WSGI
# -----------------------------------
ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "frontend_build"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
WSGI_APPLICATION = 'backend.wsgi.application'


# -----------------------------------
# DATABASE
# -----------------------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# -----------------------------------
# REST FRAMEWORK CONFIG
# -----------------------------------
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ]
}


# -----------------------------------
# CORS CONFIGURATION
# -----------------------------------
CORS_ALLOW_ALL_ORIGINS = True  # ✅ for local testing
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
     "http://127.0.0.1:8000",
]
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_HEADERS = ["*"]
CORS_EXPOSE_HEADERS = ["Content-Type", "X-CSRFToken"]


# -----------------------------------
# PASSWORD VALIDATORS
# -----------------------------------
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# -----------------------------------
# LANGUAGE / TIME / TZ
# -----------------------------------
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Dhaka'
USE_I18N = True
USE_TZ = True


# -----------------------------------
# STATIC & MEDIA FILES
# -----------------------------------
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / "frontend_build" / "static"]
STATIC_ROOT = BASE_DIR / "staticfiles"  # for collectstatic


MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

CKEDITOR_UPLOAD_PATH = 'uploads/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# -----------------------------------
# ✅ Custom Middleware to Allow CORS for Media Files
# -----------------------------------
class CORSMediaMiddleware(MiddlewareMixin):
    """
    Fix for CORS errors when accessing /media/ files in local dev.
    Allows GET, OPTIONS requests from any origin.
    """
    def process_response(self, request, response):
        if request.path.startswith('/media/'):
            response["Access-Control-Allow-Origin"] = "*"
            response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
            response["Access-Control-Allow-Headers"] = "Content-Type"
        return response
