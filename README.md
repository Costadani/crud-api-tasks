# 🚀 API Node.js com Express para CRUD de Tarefas

Este é um projeto de API em Node.js usando o framework Express para criar um CRUD de tarefas. Ele fornece endpoints para criar, visualizar, atualizar e excluir tarefas.

## Tecnologias

- Node.js
- Express
- MySQL 
## Funcionalidades

- Criar uma nova tarefa
- Visualizar todas as tarefas
- Visualizar uma tarefa específica pelo ID
- Atualizar uma tarefa existente
- Excluir uma tarefa pelo ID
## Pré-requisitos

- Node.js instalado no seu sistema. Você pode baixá-lo [aqui](https://nodejs.org/).
- Git instalado no seu sistema, se você deseja clonar este repositório.

## Instalação

1. Clone este repositório para o seu computador usando o seguinte comando:

    ```bash
    git clone https://github.com/seu-usuario/api-node-express-crud-tarefas.git
    ```

2. Instale as dependências do projeto usando npm ou yarn:

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

## Configuração

1. Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como a porta do servidor e as credenciais do banco de dados, se aplicável.

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

ou

```bash
yarn start
```

Isso iniciará o servidor na porta especificada no arquivo `.env`.

## Endpoints

- `GET /tarefas/`: Retorna todas as tarefas.
- `GET /tarefa/:id`: Retorna uma tarefa específica pelo ID.
- `POST /novaTarefa/`: Cria uma nova tarefa.
- `PUT /atualizar/tarefa/:id`: Atualiza uma tarefa existente pelo ID.
- `DELETE /remover/tarefa/:id`: Exclui uma tarefa pelo ID.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue se encontrar algum problema ou enviar um pull request com melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
