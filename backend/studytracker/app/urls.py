from django.urls import path
from .views import (UserListCreateView, SubjectListCreateView, SubjectDetailView, StudySessionListCreateView, StudySessionDetailView)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/users/', UserListCreateView.as_view(), name='user-list-create'),
    path('api/subjects/', SubjectListCreateView.as_view(), name='subject-list-create'),
    path('api/subject/<int:pk>/', SubjectDetailView.as_view(), name='subject-detail'),
    path('api/session/', StudySessionListCreateView.as_view(), name='session-list-create'),
    path('api/session/<int:pk>/', StudySessionDetailView.as_view(), name='session-detail'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]