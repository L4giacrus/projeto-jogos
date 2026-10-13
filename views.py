from django.http import JsonResponse

tarefas = []

def lista_tarefas(request):
    return JsonResponse(tarefas, safe=False)
