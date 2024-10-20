# https://django-rest-framework.org/api-guide/generic-views/#examples
from .models import User, Subject, StudySession
from .serializers import UserSerializer, SubjectSerializer, StudySessionSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


# User list and creat view
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Subject list and create view
class SubjectListCreateView(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = [IsAuthenticated] # Only Autenticated User

    # https://www.django-rest-framework.org/api-guide/generic-views/#examples:~:text=Save%20and%20deletion%20hooks%3A
    # set an attribute on the object based on the request user
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# https://www.django-rest-framework.org/api-guide/generic-views/#concrete-view-classes
# Retrive/Update/Delete view of specific subject
class SubjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = [IsAuthenticated] # Only Autenticated User

    # https://www.django-rest-framework.org/api-guide/generic-views/#methods
    # display subejct of authenticated user
    def get_queryset(self):
        return Subject.objects.filter(user = self.request.user)

# StudySession list and create view
class StudySessionListCreateView(generics.ListCreateAPIView):
    queryset = StudySession.objects.all()
    serializer_class = StudySessionSerializer
    permission_classes = [IsAuthenticated] # Only Autenticated User

    # display study session of authenticated user
    def get_queryset(self):
        return StudySession.objects.filter(user = self.request.user)
    
# Retrive/Update/Delete view of study session
class StudySessionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudySession.objects.all()
    serializer_class = StudySessionSerializer
    permission_classes = [IsAuthenticated] # Only Autenticated User

    # https://www.django-rest-framework.org/api-guide/generic-views/#methods
    # display subejct of authenticated user
    def get_queryset(self):
        return Subject.objects.filter(user = self.request.user)