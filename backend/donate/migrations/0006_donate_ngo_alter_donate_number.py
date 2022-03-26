# Generated by Django 4.0.3 on 2022-03-26 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0005_alter_donate_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='donate',
            name='ngo',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name='donate',
            name='number',
            field=models.IntegerField(default=0, max_length=10),
        ),
    ]