
from rest_framework import serializers # este paquete nos permite seleccionar los campos
from django.contrib.auth.models import User
from .models import Tasks

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        # fields = ('id', 'titulo', 'description', 'done')

        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
