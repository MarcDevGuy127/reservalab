const express = require('express');

const usuarioRoutes = require('./routes/usuario.routes');

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;