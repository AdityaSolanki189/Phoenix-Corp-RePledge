# Generated by Django 4.0.3 on 2022-03-27 01:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0010_remove_donate_apartment_alter_donate_number_tracker'),
    ]

    operations = [
        migrations.AddField(
            model_name='donate',
            name='room_no',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='donate',
            name='number',
            field=models.CharField(default=0, max_length=10, validators=[django.core.validators.MinLengthValidator(10)]),
        ),
    ]