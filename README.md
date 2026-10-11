# ⏰ ReservaLab API
A RESTful API built with Node.js and Express.js. That API is built with the academic purpouse to develop a lab reservation system to UniBrasil. The API contains CRUD operations and MongoDB integration. You can test it with Postman/Insomnia.

# 🛠️ Technologies

* Node.js
* Express.js
* Mongoose
* MongoDB
* Docker
* VS Code
* Postman

# ✨ Feature
Here's what you can do:
* Registrate new laboratories.
* Get default laboratories.
* Update laboratories status.
* Delete existing laboratories.
* Post new reservations on catalog.
* Update registered reservations.
* Refuse specific reservations.
* Handle errors and exceptions.
* Auth users.

# 🚀 The Process

I started installing Node dependences before define the API structure. Then, I declared consts to define essencial variables like {PORT, app, req and express}. Then I used a simple middleware to read JSON and simulated a database with the variable `laboratorios` that contains default products values. Next, I implemented specified routes to the API's root `/` and for the GET, POST, PUT and DELETE verbs.

For the **GET** `/laboratorios`, I defined a response to return the json value from `laboratorios` variable.

Also for the **GET** `/laboratorios/:id`, I declared a const called `catalogo` to find specific id from `laboratorios` id using *req.params*.

For the **PUT** `/laboratorios/:id`, I declared consts `laboratorio`, `id` and `nome`. The `id` I used *req.params.id* to parse Integer, `nome` for return request body and `laboratorios` to find specific ids. Next, you will be able to just update the product `nome` properity. 

And for the **DELETE** `/laboratorios/:id`, I declared the same const `id` with `indice` to delete a specified product finding it by your own id. If that action is succesfull a message will be displayed.

When the API is running a message with the PORT parameter will be displayed.

Now I am studing how to handle errors, API structure and how to integrate it with database.

# Structure (In Progress)

`reservalab/
│
├── laboratorio-service/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── package.json
│   └── Dockerfile          --computador virtual para rodar o servico voltado em laboratórios
│
├── reserva-service/      --servico relacionado com solicitacoes de reserva
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── package.json
│   └── Dockerfile          --computador virtual para rodar o servico voltado em reservas
│
├── usuario-service/       --servico relacionado com usuarios do ReservaLab
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── package.json
│   └── Dockerfile          --computador virtual para rodar o servico voltado em usuários
│
├── .env --senha e conexao do banco de dados
├── package.json
└── Dockerfile              --computador virtual para rodar todos os serviços`

# ▶️ Running the project

To run the project in your local environment, follow these steps:

1. Clone the repository to your machine.
`git clone https://github.com/MarcDevGuy127/reservalab`

2. For a better praticity and produtivity, install **nodemon** using the next commands on Terminal too:

* `npm init -y`
* `npm install express --save`
* `npm install -g  nodemon`
* `nodemon index.js`

3. For testing the API, you can use Postman/Insomnia (and another option is to install the Thunder Client extension on VS Code).

* After start the API with `nodemon index.js`, you must copy the localhost addres like *https://localhost:8080* and paste it on Postman. After it, select the method type and test it.

# Commits Pattern
* feat: commit new feature
* docs: document
* style: add CSS styles to frontend
* chore: dependences config or update
* fix: bugs fix
* test: commit test code
* refactor: code refactoring without logic changes

# Credits

* @MarcDevGuy127
* @ThiGalego
* @victoagsto5