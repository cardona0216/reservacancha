from django.db import models

#creaos la tabla para las tareas

class Tasks(models.Model):
    titulo = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self) :
        return self.titulo
