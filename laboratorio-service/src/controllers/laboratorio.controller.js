// constante que solicita o arquivo laboratorio.service
const laboratorioService = require('../services/laboratorio.service');

// função para listar os laboratórios
function listar(req, res) {

    const laboratorios = laboratorioService.listar();

    res.json(laboratorios);
}

// função para buscar laboratório por id
function buscarPorId(req, res) {

    const id = parseInt(req.params.id);

    const laboratorio = laboratorioService.buscarPorId(id);

    if (!laboratorio) {
        return res
            .status(404)
            .json({ mensagem: 'Laboratório não encontrado' });
    }

    res.json(laboratorio);
}

// função para cadastrar laboratório
function cadastrar(req, res) {

    const { nome } = req.body;

    const laboratorio = laboratorioService.cadastrar(nome);

    res.status(201).json(laboratorio);
}

// função para atualizar laboratório
function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    const laboratorio = laboratorioService.atualizar(id, nome);

    if (!laboratorio) {
        return res
            .status(404)
            .json({ mensagem: 'Laboratório não encontrado' })
    }

    res.json(laboratorio);
}

// exportando funções
module.exports = {
    listar,
    buscarPorId,
    cadastrar,
    atualizar
};