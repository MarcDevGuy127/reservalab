// constante que solicita o arquivo laboratorio.service
const usuarioService = require('../services/usuario.service');

// função para listar os usuários
function listar(req, res) {

    const usuarios = usuarioService.listar();

    res.json(usuarios);
}

// função para buscar Usuário por id
function buscarPorId(req, res) {

    const id = parseInt(req.params.id);

    const laboratorio = usuarioService.buscarPorId(id);

    if (!laboratorio) {
        return res
            .status(404)
            .json({ mensagem: 'Usuário não encontrado' });
    }

    res.status(201).json({ mensagem: 'Usuário deletado' });
}

// função para atualizar usuário
function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    const laboratorio = usuarioService.atualizar(id, nome);

    if (!laboratorio) {
        return res
            .status(404)
            .json({ mensagem: 'Usuário não encontrado' })
    }

    res.json(laboratorio);
}

// exportando funções
module.exports = {
    listar,
    buscarPorId,
    atualizar
};