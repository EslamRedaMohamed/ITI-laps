"""
URL configuration for Ecommerce project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from tracking_system import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("ts/", views.home, name='home'),  # Added a name for the view
    path('get-orders/', views.getOrders, name='get_orders'),
    path('post-order/', views.postOrder, name='post_order'),
    path("", include('mart.urls')),  # Ensure mart.urls handles its paths correctly
    path("products/", include('products.urls')),  # Ensure products.urls is set up correctly
    path("login/", include('login.urls'))
]

# Serve media files during development only

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)