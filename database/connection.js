var knex =  require('knex')({
    client: 'mysql2',
    connection:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tarefas_bemol'
    }
});

module.exports = knex