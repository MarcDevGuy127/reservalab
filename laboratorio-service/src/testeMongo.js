require('dotenv').config({
    path: require('path').resolve(__dirname, '../atlas-credentials.env')
});

console.log(
    'MONGODB_URI definida:',
    Boolean(process.env.MONGODB_URI)
);

const conectarBanco = require('./config/database');
const Laboratorio = require('./models/Laboratorio');

async function testar() {
    try {
        await conectarBanco();

        const laboratorio = await Laboratorio.create({
            nome: 'Laboratório de Informática',
            localizacao: 'Bloco A',
            capacidade: 30,
            ativo: true
        });

        console.log('Laboratório cadastrado:', laboratorio);

        process.exit(0);
    } catch (erro) {
        console.error('Erro:', erro.message);
        process.exit(1);
    }
}

testar();
