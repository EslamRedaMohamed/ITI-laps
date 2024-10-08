# Generated by Django 5.1 on 2024-09-06 21:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0005_alter_order_order_id_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="transaction",
            name="transaction_order_id",
        ),
        migrations.AlterModelOptions(
            name="product",
            options={"ordering": ["-price"], "verbose_name": "Mart Product"},
        ),
        migrations.AlterField(
            model_name="product",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="photos/%Y/%m/%d"),
        ),
        migrations.DeleteModel(
            name="Order",
        ),
        migrations.DeleteModel(
            name="Transaction",
        ),
    ]
