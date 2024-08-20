from rest_framework.decorators import api_view
from rest_framework.response import Response
from tasks.serializer import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth import authenticate



@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Validar que los datos necesarios están presentes
    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    # Autenticación del usuario
    user = authenticate(username=username, password=password)

    if user is None:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    # Crear o recuperar el token
    token, created = Token.objects.get_or_create(user=user)

    # Serializar los datos del usuario
    serializer = UserSerializer(instance=user)

    # Devolver el token y los datos del usuario
    return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_200_OK)

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        if serializer.validated_data.get('is_superuser', False):
            user.is_superuser = True
            user.is_staff = True
            user.save()

        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile(request):
    print(request.user)
    user = request.user
    return Response(f"Estás logueado con {user.username}". format(request.user.username),
                    status=status.HTTP_200_OK)

