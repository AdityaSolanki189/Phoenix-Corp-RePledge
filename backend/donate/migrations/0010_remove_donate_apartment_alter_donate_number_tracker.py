# Generated by Django 4.0.3 on 2022-03-27 00:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0009_alter_donate_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='donate',
            name='apartment',
        ),
        migrations.AlterField(
            model_name='donate',
            name='number',
            field=models.CharField(default=0, max_length=10),
        ),
        migrations.CreateModel(
            name='tracker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.CharField(max_length=256)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('OP', 'Order Placed'), ('IT', 'In Transit'), ('OT', 'Output Delivery'), ('DE', 'Delivery')], default='OP', max_length=2)),
                ('donate', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tracker', to='donate.donate')),
            ],
        ),
    ]