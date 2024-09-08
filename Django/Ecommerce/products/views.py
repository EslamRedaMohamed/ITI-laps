from django.shortcuts import get_object_or_404,render
from .models import Product

# Create your views here.


def product(request, id):
    product = get_object_or_404(Product, id=id)
    return render(request, 'products/product.html', {'product': product})

def products(request):
    products = Product.objects.filter(active=True)
    return render(request, 'products/products.html', {'products': products})