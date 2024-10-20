from .models import User, Subject, StudySession
from rest_framework import serializers

# https://www.django-rest-framework.org/api-guide/serializers/#additional-keyword-arguments
# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
# Subject Serializer
class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'user', 'subject']

# StudySession Serializer
class StudySessionSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer(read_only=True)
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = StudySession
        fields = ['id', 'user', 'subject', 'study_time', 'session_date']

    def create(self, validated_data):
        # https://www.django-rest-framework.org/api-guide/serializers/#writing-create-methods-for-nested-representations
        return StudySession.objects.create(**validated_data)