# Generated by Django 3.1.7 on 2021-03-18 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patientdb', '0005_auto_20210223_2132'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='has_annotations',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name='signals',
            name='hannotation',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]