
from rest_framework import serializers # este paquete nos permite seleccionar los campos
from django.contrib.auth.models import User
from .models import Tasks
from rest_framework.validators import ValidationError

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        # fields = ('id', 'titulo', 'description', 'done')

        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)  # Confirmación de contraseña
    is_superuser = serializers.BooleanField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'password2', 'is_superuser']
        extra_kwargs = {
            'password': {'write_only': True},
            'password2': {'write_only': True},
        }

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({'password2': 'Passwords must match.'})
    
        if User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({'email': 'A user with this email already exists.'})

        return data
    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        return user