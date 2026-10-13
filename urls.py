from django.urls import path
from views import lista_tarefas

urlpatterns = [
    path('tarefas/', lista_tarefas),
]
