const app = require('./app'); //  isso é uma função
const PORT = process.env.PORT || 8080; // porta que o projeto é executado

// Informa link e execução da api
app.listen(PORT, () => {
    console.log(`API rodando com sucesso em: http://localhost:${PORT}`);
});