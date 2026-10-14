const Usuario = require('../models/Usuario');

// função listar usuário
async function listar() {
    return await Usuario.find();
}

// função consultar usuário por id
async function buscarPorId(id) {
    return await Usuario.findById(id);
}

// função cadastrar usuário
async function cadastrar(dados) {
    const novoUsuario = await Usuario.create({
        nome: dados.nome,
        ra: dados.ra,
        email: dados.email,
        role: dados.role || 'Professor',
        ativo: dados.ativo !== undefined ? dados.ativo : true
    });

    return novoUsuario;
}

// função atualizar usuário
async function atualizarDadosCadastrais(id, dados) {
    const camposPermitidos = {};

    if (dados.nome) camposPermitidos.nome = dados.nome;
    if (dados.email) camposPermitidos.email = dados.email;

    return await Usuario.findByIdAndUpdate(
        id,
        camposPermitidos,
        { new: true, runValidators: true }
    );
}

// função alterar pefil e permissão do usuário
async function alterarPerfilEPermissao(id, dados) {
    const camposPermissao = {};

    if (dados.role) camposPermissao.role = dados.role;
    if (dados.ativo !== undefined) camposPermissao.ativo = dados.ativo;

    return await Usuario.findByIdAndUpdate(
        id,
        camposPermissao,
        { new: true, runValidators: true }
    );
}

// função deletar usuário
async function deletar(id) {
    const resultado = await Usuario.findByIdAndDelete(id);
    return Boolean(resultado);
}

// exportando funções
module.exports = {
    listar,
    buscarPorId,
    cadastrar,
    atualizarDadosCadastrais,
    alterarPerfilEPermissao,
    deletar
};