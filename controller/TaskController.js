const database = require('../database/connection')
/*
Task Controller é responsável por fazer os métodos da API:
*POST(Inserir)
*GET(Buscar Dados)
*PUT (Atualiza os Dados)
*DELETE (Deleta os dados)
*/
class TaskController{

    novaTarefa(req, res){
        const {descricao, status} = req.body

        console.log(descricao, status)

        database.insert({descricao,status}).table("tasks").then(data=>{
            console.log(data)
            res.json({message: "Tarefa Criada com Sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarTarefas(req, res){
        database.select("*").table("tasks").then(tarefas=>{
            console.log(tarefas)
            res.json(tarefas)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmaTarefa(request, response){
        const id = request.params
       
        database.select("*").table("tasks").where((q) => {
            q.where('id', '=', `${id.id}`)}).then(tarefas=>{
            console.log(id.id)
            response.json(tarefas)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarTarefa(req, res){

        const id  =  req.params
        const id_e  = id.id

        const {descricao, status} = req.body

        database.where({id: id_e}).update({descricao:descricao, status: status}).table("tasks").then(data=>{
            res.json({message: "Tarefa Ataulizada"});
        }).catch(error =>{
            res.json(error)
        })

    }

    completarTarefa(req, res){

        const id  =  req.params
        const id_e  = id.id

        const {status} = req.body

        database.where({id: id_e}).update({status: status}).table("tasks").then(data=>{
            res.json({message: "Tarefa Ataulizada"});
        }).catch(error =>{
            res.json(error)
        })

    }

    removerTarefa(req, res){
        const id = req.params
        const id_e = id.id

        database.where({id:id_e}).del().table("tasks").then(data =>{
            res.json({message: "Tarefa removida"})
        }).catch(error=>{
            res.json(error)
        })
    }

    
}

module.exports = new TaskController()