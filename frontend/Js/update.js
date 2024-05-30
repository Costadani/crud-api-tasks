const url = 'http://localhost:4000'

const params = new URLSearchParams(window.location.search);
const taskId = params.get('id');


function getTarefa() {

    $.ajax({
        url: 'http://localhost:4000/tarefa/'+taskId,
        method: 'GET',
        success: function (data) {
            // Limpar o conteúdo anterior
            $.each(data, function (index, task) {
                $("#descricao").val(task.descricao)
            })

            },
        error: function () {
            alert("Erro ao carregar os dados.");
        }
    });

}
getTarefa();

const taskForm = document.getElementById("task_form")

taskForm.addEventListener('submit', event => {
    event.preventDefault();
    atualizarTarefa();
    window.location.href = "index.html";
});

function atualizarTarefa() {
   
    const dados = {
        descricao: document.getElementById('descricao').value
    }

    fetch(url + '/atualizar/tarefa/'+taskId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
        
    }).then(data => {
        console.log(data);

    }).catch(error => {
        console.error('Erro ao consumir a API:', error);
    });


    
}