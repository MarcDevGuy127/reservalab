const express = require('express'); // here is part of the middleware  
const req = require('express/lib/request');
const app = express(); //  it's a function
const PORT = process.env.PORT || 8080;

app.use(express.json()); // here is the middleware to read JSON

// database
let laboratorios = [
    { id: 1, nome: 'Laboratório 1'},
    { id: 2, nome: 'Laboratório 2'}
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// GET - Return the products list without specified id
app.get('/laboratorios', (req, res) => { // that's the route
    res.status(200).json(laboratorios);
});

// GET - Return the products list when consult specified id
app.get('/laboratorios/:id', (req, res) => { // that's the route
    const catalogo = laboratorios.find(laboratorio => laboratorio.id === parseInt(req.params.id));
    if (!catalogo) return res.status(404).send('O laboratório com o ID informado não existe');
    res.send(catalogo);
});

// query
app.get('/laboratorios/:id', (req, res) => {
    res.send(req.query);
});

// POST - Add new product
app.post('/laboratorios', (req, res) => {
    const novoLaboratorio = {
        id: laboratorios.length +1,
        nome: req.body.nome
    };

    laboratorios.push(novoLaboratorio);
    res.status(201).json(novoLaboratorio);
});

// PUT - Update product with specified id
app.put('/laboratorios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    const laboratorio = laboratorios.find(laboratorio => laboratorio.id === id);

    if (!laboratorio) {
        return res.status(404).json({
            erro: "Laboratório não encontrado."
        });
    }

    laboratorio.nome = nome;

    res.status(200).json(laboratorio);
});

// DELETE - Delete specified product
app.delete('/laboratorios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const indice = laboratorios.findIndex(laboratorio => laboratorio.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: "Laboratório não encontrado."
        });
    }

    laboratorios.splice(indice, 1);

    res.status(200).json({
        mensagem: "Laboratório removido com sucesso."
    });
});

app.listen(PORT, () => {
    console.log(`API rodando com sucesso em: http://localhost:${PORT}`);
});