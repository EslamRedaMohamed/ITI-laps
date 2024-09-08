import csv
import os
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
import json

# Path to your CSV file
csvFilePath = os.path.join(os.path.dirname(__file__), 'sheet.csv')

# Home view
def home(request):
    return render(request=request, template_name='home.html')

# Get data from CSV
@require_http_methods(["GET"])
def getOrders(request):
    orders = []
    try:
        with open(csvFilePath, mode='r', newline='') as file:
            reader = csv.DictReader(file)
            for row in reader:
                orders.append(row)
        return JsonResponse(orders, safe=False)  # Set safe=False to allow list return
    except FileNotFoundError:
        return JsonResponse({'error': f'CSV file not found at {csvFilePath}'}, status=404)



@csrf_exempt
@require_http_methods(["POST"])
def postOrder(request):
    try:
        data = json.loads(request.body)
        fieldNames = ['orderID', 'orderName', 'userName', 'status']
        
        fileExists = os.path.isfile(csvFilePath)
        
        
        with open(csvFilePath, mode='a', newline='') as file:
            writer = csv.DictWriter(file, fieldnames=fieldNames)
            
            if not fileExists:
                writer.writeheader()
                
            writer.writerow({
                'orderID': data['orderID'],
                'orderName': data['orderName'],
                'userName': data['userName'],
                'status': data['status'],
            })
            
        return JsonResponse({'success': True, 'order': data})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
