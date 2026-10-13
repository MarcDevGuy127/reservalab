const express = require('express');

const laboratorioRoutes = require('./routes/laboratorio.routes');

const app = express();

app.use(express.json());

app.use('/laboratorios', laboratorioRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;