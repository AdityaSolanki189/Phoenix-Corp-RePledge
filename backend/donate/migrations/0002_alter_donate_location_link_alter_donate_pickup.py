# Generated by Django 4.0.3 on 2022-03-26 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donate',
            name='location_link',
            field=models.URLField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='donate',
            name='pickup',
            field=models.DateField(),
        ),
    ]
