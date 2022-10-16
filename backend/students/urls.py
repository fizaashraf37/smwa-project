from django.urls import path
from .views import StudentView

urlpatterns = [
    path("students/", StudentView.as_view()),
    path("students/<int:pk>/", StudentView.as_view())
]
