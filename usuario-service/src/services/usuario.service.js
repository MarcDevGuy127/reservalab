let usuarios = [
    {
        id: 1,
        nome: 'Usuário 1',
        email: 'usuario1@email.com'
    },
    {
        id: 2,
        nome: 'Usuário 2',
        email: 'usuario2@email.com'
    }
];

// função listar
function listar() {
    return usuarios;
}

// função buscar laboratório por id
function buscarPorId(id) {

    return usuarios.find(
        usuario => usuario.id === id
    );
}

function atualizar(id, nome) {

    const usuario = usuarios.find(
        usuario => usuario.id === id
    );

    if (!usuario) {
        return null;
    }

    usuario.nome = nome;

    return usuario;
}

// exportando funções
module.exports = {
    listar,
    buscarPorId,
    atualizar
};