# Generated by Django 4.0.3 on 2022-03-26 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0003_donate_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='donate',
            name='number',
            field=models.CharField(default='', max_length=10),
        ),
    ]
