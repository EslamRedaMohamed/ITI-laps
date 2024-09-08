from django.urls import path
from . import views
from products import views as vs

urlpatterns = [
    path('', views.login, name= "login"),
    path('products/', vs.products, name= "products")
]



