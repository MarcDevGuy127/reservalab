require('dotenv').config({
    path: require('path').resolve(__dirname, '../../atlas-credentials.env')
});

console.log(
    'MONGODB_URI definida:',
    Boolean(process.env.MONGODB_URI)
);

const conectarBanco = require('./config/database');
const Usuario = require('./models/Usuario');

async function testar() {
    try {
        await conectarBanco();

        const usuario = await Usuario.create({
            nome: 'Thiago Galego',
            ra: 2019100521,
            email: 'thiago.galego@unibrasil.com.br',
            role: 'Coordenador',
            ativo: true
        });

        console.log('Usuário cadastrado:', usuario);

        process.exit(0);
    } catch (erro) {
        console.error('Erro:', erro.message);
        process.exit(1);
    }
}

testar();