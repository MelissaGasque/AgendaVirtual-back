
# Projeto Fullstack: Agenda Virtual

Bem-vindas(os) ao meu primeiro projeto Fullstack!

Esse arquivo é a parte backend de um projeto fullstack no qual será reazliado uma agenda virtual. Nessa agenda virtual, é possível se cadastrar e adicionar seus contatos.


## Funcionalidades
 ### Cadastro e Login:

* O cliente se cadastra fornecendo seu nome, email e telefone, um username e senha (os dois ultimos utilizados no login).


### Gestão de Contatos:

* Após o cadastro e login, o cliente pode adicionar contatos à sua agenda.
* As informações dos contatos incluem nome, email, telefone e outras informações desejadas.
* É possível atualizar, ler e deletar os contatos adicionados.


## Tecnologias Utilizadas
* Linguagem: JavaScript/TypeScript
* Framework: Express (Node.js)
* Banco de Dados: PostgreSQL
* ORM: TypeORM

## Acesso
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

* Crie o arquivo .env:

Copie o conteúdo do .env.example e forneça os dados necessários para configurar o banco de dados PostgreSQL.



A execução da aplicação é feito por meio do:
```
npm run dev
```



## Endpoints

### Clients:

| Método | Rota                 | Descrição                              |
| ------ | -------------------- | -------------------------------------- |
| GET    | `/clients`           | Obtém todos os clientes.               |
| GET    | `/clients/:id`       | Obtém um cliente específico.           |
| POST   | `/clients`           | Cria um novo cliente.                  |
| PATCH  | `/clients/:id`       | Atualiza as informações de um cliente. |
| DELETE | `/clients/:id`       | Deleta um cliente.                     |



### Login:

| Método | Rota           | Descrição                      |
| ------ | -------------- | ------------------------------ |
| POST   | `/login`       | Rota para realizar login.      |


### Contacts:

| Método | Rota                 | Descrição                              |
| ------ | -------------------- | -------------------------------------- |
| GET    | `/contacts`          | Obtém todos os contatos.               |
| POST   | `/contacts`          | Adiciona um novo contato.              |
| PATCH  | `/contacts/:id`      | Atualiza as informações de um contato. |
| DELETE | `/contacts/:id`      | Deleta um contato.                     |



## Rotas Sem autenticação:

### Criação do cliente
**POST -   `/clients`  - Envio:**
```
{
	"full_name": "Lord Voldemort",
	"username": "Voldemort",
	"email": "voldemort@email.com",
	"password": "voumatarharrypotter",
	"phone_number": "666-666-666",
	"admin": false (Não é obrigatório)
}
```
**POST -   `/clients`  - Retorno:**
```
{
	"id": "ea5bc2bc-6ac6-4c8f-bbdd-dab7115f2b86",
	"full_name": "Lord Voldemort",
	"username": "Voldemort",
	"email": "voldemort@email.com",
	"phone_number": "666-666-666",
	"admin": false,
	"created_at": "2023-11-25"
}
```

### Login
**POST -   `/login`  - Envio:**
```
{
    "username": "Voldemort",
    "password": "voumatarharrypotter",
}
```
**POST -   `/login`  - Retorno:**
```
{
	{
	"token": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImlkVG9rZW4iOiIzMzM5YTkwYy0yODk0LTRlM2YtOTQwZi1hODM5OWZjYWI1MTMiLCJpYXQiOjE3MDEwOTM5MTIsImV4cCI6MTcwMTE4MDMxMiwic3ViIjoiMzMzOWE5MGMtMjg5NC00ZTNmLTk0MGYtYTgzOTlmY2FiNTEzIn0.DLEcZMRekbG8-pvsjrtxLItac9O8KByf6H5eyFhjrQ8",
		"user": {
			"id": "ea5bc2bc-6ac6-4c8f-bbdd-dab7115f2b86",
            "full_name": "Lord Voldemort",
            "username": "Voldemort",
            "email": "voldemort@email.com",
            "phone_number": "666-666-666",
            "admin": false,
	        "created_at": "2023-11-25"
		}
	}
}
}
```

## Rotas COM autenticação:

## Clients
### Mostra todos os clientes

**GET -   `/clients`  - Retorno:**
```
[
	{
		"id": "ea5bc2bc-6ac6-4c8f-bbdd-dab7115f2b86",
        "full_name": "Lord Voldemort",
        "username": "Voldemort",
        "email": "voldemort@email.com",
        "phone_number": "666-666-666",
        "admin": false,
        "created_at": "2023-11-25"
	},
	{
		"id": "588d4a4b-84a6-4e2f-831d-676701cfdae6",
		"full_name": "Albus Percival Wulfric Brian Dumbledore",
		"username": "Dumbledore",
		"email": "dumbledore@email.com",
		"phone_number": "999-999-999",
		"admin": true,
		"created_at": "2023-11-25"
	},
]
```

### Mostra um unico cliente (adicionar id )

**GET -   `/clients/:id`  - Retorno:**
```
{
    "id": "588d4a4b-84a6-4e2f-831d-676701cfdae6",
    "full_name": "Albus Percival Wulfric Brian Dumbledore",
    "username": "Dumbledore",
    "email": "dumbledore@email.com",
    "phone_number": "999-999-999",
    "admin": true,
    "created_at": "2023-11-25"
}

```

### Atualização do cliente
**PATCH -   `/clients/:id`  - Envio:**
```
{
	"full_name": "Ronald Weasley",
	"username": "rony",
	"email": "ronynho@email.com",
	"password": "NaoSigaAsAranhas",
	"phone_number": "795403957",
	"admin": false 
}
```
**PATCH -   `/clients/:id`  - Retorno:**
```
{
	"id": "ea5bc2bc-6ac6-4c8f-bbdd-dab7115f2b86",
	"full_name": "Ronald Weasley",
	"username": "rony",
	"email": "ronynho@email.com",
	"password": "NaoSigaAsAranhas",
	"phone_number": "795403957",
	"admin": false, 
	"created_at": "2023-11-25"
}
```

### Deletar cliente

**DELETE -   `/clients/:id`  - Retorno:**
200 - OK


## CONTACT
### Criação do contato
**POST -   `/contact`  - Envio:**
```
{
	"full_name": "Ariel",
	"email": "ariel@email.com",
	"phone_number": "6937594037",
	"other_information": "Sereia que mora no fundo do mar e quer viver na terra"
}
```
**POST -   `/contact`  - Retorno:**
```
{
	"id": "3a38412b-b9a3-43f7-9a06-90874399438c",
	"full_name": "Ariel",
	"email": "ariel@email.com",
	"phone_number": "6937594037",
	"other_information": "Sereia que mora no fundo do mar e quer viver na terra"
	"created_at": "2023-11-27"
}
```
### Mostra todos os contatos

**GET -   `/contact`  - Retorno:**
```
[
    {
        "id": "3a38412b-b9a3-43f7-9a06-90874399438c",
        "full_name": "Ariel",
        "email": "ariel@email.com",
        "phone_number": "6937594037",
        "other_information": "Sereia que mora no fundo do mar e quer viver na terra"
        "created_at": "2023-11-27"
    },
	{
        "id": "4a584712b-b9a3-43f7-9a06-908743994c",
        "full_name": "Ursula",
        "email": "ursula@email.com",
        "phone_number": "79356037",
        "other_information": "Bruxa do mar, irmão do tritão"
        "created_at": "2023-11-27"
    }
]
```

### Atualização do cliente
**PATCH -   `/contact/:id`  - Envio:**
```
 {
    "full_name": "Arielzim",
    "email": "arielzim@email.com",
    "phone_number": "8937594037",
    "other_information": "Sereia mudou para o castelo"
},
```
**PATCH -   `/contact/:id`  - Retorno:**
```
{
	"id": "3a38412b-b9a3-43f7-9a06-90874399438c",
    "full_name": "Arielzim",
    "email": "arielzim@email.com",
    "phone_number": "8937594037",
    "other_information": "Sereia mudou para o castelo"
    "created_at": "2023-11-27"
}
```

### Deletar cliente

**DELETE -   `/contact/:id`  - Retorno:**
200 - OK


##  url base da API é localhost:3000/