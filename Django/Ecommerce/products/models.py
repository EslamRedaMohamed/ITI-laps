from django.db import models

class Product(models.Model):
    id = models.AutoField(primary_key=True)  # Explicitly define id as an auto-incrementing primary key
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    active = models.BooleanField(default=True)
    image = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True, null=True)  # Allow null values

    # String representation of the model
    def __str__(self) -> str:
        return f'Name: {self.name}, Price: ${self.price:.2f}, Status: {"Active" if self.active else "Inactive"}'

    # Additional method to get a formatted price
    def formatted_price(self):
        return f"${self.price:.2f}"

    class Meta:
        verbose_name = 'Mart Product'
        ordering = ['-price']  # Order by price in descending order



#one to one
class Order(models.Model):
    order_name = models.CharField(max_length=255)
    order_id = models.IntegerField()
    
    def __str__(self) -> str:
        return self.order_name

class Transaction(models.Model):
    transaction_order_id = models.OneToOneField(Order, on_delete=models.CASCADE)
    
#one to meny



