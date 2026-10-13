let laboratorios = [
    {
        id: 1,
        nome: 'Laboratório 1'
    },
    {
        id: 2,
        nome: 'Laboratório 2'
    }
];

// função listar
function listar() {
    return laboratorios;
}

// função buscar laboratório por id
function buscarPorId(id) {

    return laboratorios.find(
        laboratorio => laboratorio.id === id
    );
}

// função cadastrar laboratório
function cadastrar(nome) {

    const novoLaboratorio = {
        id: laboratorios.length + 1,
        nome: nome
    };

    laboratorios.push(novoLaboratorio);

    return novoLaboratorio;
}

function atualizar(nome) {

    const novoLaboratorio = {
        id: laboratorios.length + 1,
        nome: nome
    };

    laboratorios.push(novoLaboratorio);

    return novoLaboratorio;
}

// exportando funções
module.exports = {
    listar,
    buscarPorId,
    cadastrar
};