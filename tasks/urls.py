#aqui creaos las rutas que va a consultar el frontend 

# agenda/urls.py
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from tasks import views

router = DefaultRouter()
router.register(r'tarea', views.TaskView, 'task')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/',include_docs_urls(title='Tasks API'))

]

