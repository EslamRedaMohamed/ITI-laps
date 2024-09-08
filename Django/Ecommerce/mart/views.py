from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    products = {
    "Apple": 0.99,
    "Banana": 0.59,
    "Orange": 1.29,
    "Milk": 2.49,
    "Bread": 1.99,
    "Eggs": 3.49,
    "Chicken": 7.99,
    "Rice": 4.99,
    "Cheese": 5.49,
    "Chocolate": 2.79
    }
    
    if request.method == "POST":
        selected_products = request.POST.getlist('product')
        total_price = sum(products[product] for product in selected_products)
        return render(request, "mart/order_summary.html", {'selected_products': selected_products, 'total_price': total_price})
    return render(request, "mart/index.html",{'products':products, 'name': 'Eslam'})
    
