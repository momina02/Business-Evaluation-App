from django.urls import path
from .views import evaluate_startup

urlpatterns = [
    path("evaluate-startup/", evaluate_startup),
]
