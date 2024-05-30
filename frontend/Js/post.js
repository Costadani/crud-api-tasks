const url = 'http://localhost:4000'

const taskForm = document.getElementById("task_form")

taskForm.addEventListener('submit', event => {
    event.preventDefault();
    enviarTarefa();
    window.location.href = "index.html";
});

function enviarTarefa() {
   
    const dados = {
        descricao: document.getElementById('descricao').value
    }

    fetch(url + '/novaTarefa', {
        method: 'POST',
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