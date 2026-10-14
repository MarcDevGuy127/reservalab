require('dotenv').config({
    path: require('path').resolve(__dirname, '../../atlas-credentials.env')
});

const app = require('./app');
const conectarBanco = require('./config/database');

const PORT = process.env.PORT || 8081;

conectarBanco().then(() => {
    app.listen(PORT, () => {
        console.log(`API rodando com sucesso em: http://localhost:${PORT}`);
    });
});