
# Projeto Fullstack: Agenda Virtual

Bem-vindas(os) ao meu primeiro projeto Fullstack!

Esse arquivo é a parte backend de um projeto fullstack no qual será reazliado uma agenda virtual. Nessa agenda virtual, é possível se cadastrar e adicionar seus contatos.


Funcionalidades
Cadastro e Login:

O cliente se cadastra fornecendo seu nome, email e telefone, um username e senha (os dois ultimos utilizados no login).


Gestão de Contatos:

Após o cadastro e login, o cliente pode adicionar contatos à sua agenda.
As informações dos contatos incluem nome, email, telefone e outras informações desejadas.
É possível atualizar, ler e deletar os contatos adicionados.


Tecnologias Utilizadas
Linguagem: JavaScript/TypeScript
Framework: Express (Node.js)
Banco de Dados: PostgreSQL
ORM: TypeORM

Para acessa essa API basta realizar a clonagem do repositório e em seguida instalar as dependencias necessárias:
```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
```
yarn install
# ou
npm install
```

Crie o arquivo .env:

Copie o conteúdo do .env.example e forneça os dados necessários para configurar o banco de dados PostgreSQL.



A execução da aplicação é feito por meio do:
```
npm run dev
```



Endpoints

Clients

| Método | Rota                 | Descrição                              |
| ------ | -------------------- | -------------------------------------- |
| GET    | `/clients`           | Obtém todos os clientes.               |
| GET    | `/clients/:id`       | Obtém um cliente específico.           |
| POST   | `/clients`           | Cria um novo cliente.                  |
| PATCH  | `/clients/:id`       | Atualiza as informações de um cliente. |
| DELETE | `/clients/:id`       | Deleta um cliente.                     |



Login
| Método | Rota           | Descrição                      |
| ------ | -------------- | ------------------------------ |
| POST   | `/login`       | Rota para realizar login.      |


Contacts:

| Método | Rota                 | Descrição                              |
| ------ | -------------------- | -------------------------------------- |
| GET    | `/contacts`          | Obtém todos os contatos.               |
| POST   | `/contacts`          | Adiciona um novo contato.              |
| PATCH  | `/contacts/:id`      | Atualiza as informações de um contato. |
| DELETE | `/contacts/:id`      | Deleta um contato.                     |