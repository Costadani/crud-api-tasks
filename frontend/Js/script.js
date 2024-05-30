

function getTarefas() {

    $.ajax({
        url: 'http://localhost:4000/tarefas/',
        method: 'GET',
        success: function (data) {
            // Limpar o conteúdo anterior

            $('.task_card').remove()
            $.each(data, function (index, task) {

                if (task.status == 0){
                $("#list_not_completed").append('<div class="task_card">' +
                    '<p class="title">Descrição da Tarefa</p>'
                    +'<p class="descricao">'+task.descricao+'</p>'
                    + '<div class="actions">'
                    + '<button onclick="concluirTarefa('+task.id+')">Concluir Tarefa</button>'
                    + '<button onclick="redirecionar('+task.id+')"><i class="bx bx-edit"></i></button>'
                    + '<button onclick="deletarTarefa('+task.id+')"><i class="bx bxs-trash"></i></button>'
                    + '</div>'
                    + '</div>');
                }else{
                    $("#list_completed").append('<div class="task_card">' +
                    '<p class="title">Descrição da Tarefa</p>'
                    +'<p class="descricao">'+task.descricao+'</p>'
                    + '<div class="actions">'
                    + '<button onclick="redirecionar('+task.id+')"><i class="bx bx-edit"></i></button>'
                    + '<button onclick="deletarTarefa('+task.id+')"><i class="bx bxs-trash"></i></button>'
                    + '</div>'
                    + '</div>');
                }
            });
        },
        error: function () {
            alert("Erro ao carregar os dados.");
        }
    });

}

function concluirTarefa(id){
    
    url = 'http://localhost:4000/completar/tarefa/'+id;

    console.log(url)
    const dados ={
        status : 1
    }
    console.log(dados);
    
    $.ajax({
        url: url,
        method: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(dados),
        success: function(response){
            console.log(response.message); 
            getTarefas()
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText); // Imprimir detalhes do erro no console
         }
    });

}


function deletarTarefa(id){
    

    url = 'http://localhost:4000/deletar/tarefa/'+id;

    console.log(url)

    $.ajax({
        url: url,
        method: 'DELETE',
        success: function (response) {
            getTarefas();
        },
        error: function () {
            alert("Erro ao atualizar os dados.");
        }
    });

}

function redirecionar(taskId){
    window.location.href = 'update_tarefa.html?id=' + taskId; 
}



getTarefas()
