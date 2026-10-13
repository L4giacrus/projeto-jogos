from django.db import models

class Tarefa(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=200)
    categoria = models.CharField(max_length=50)
    concluida = models.BooleanField(default=False)
