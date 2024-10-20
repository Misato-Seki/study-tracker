from django.urls import path
from .views import (UserListCreateView, SubjectListCreateView, SubjectDetailView, StudySessionListCreateView, StudySessionDetailView)

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('subjects/', SubjectListCreateView.as_view(), name='subject-list-create'),
    path('subject/<int:pk>/', SubjectDetailView.as_view(), name='subject-detail'),
    path('session/', StudySessionListCreateView.as_view(), name='session-list-create'),
    path('session/<int:pk>/', StudySessionDetailView.as_view(), name='session-detail'),
]