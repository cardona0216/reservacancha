
from rest_framework import serializers # este paquete nos permite seleccionar los campos
from .models import Tasks

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        # fields = ('id', 'titulo', 'description', 'done')

        fields = '__all__'