const usuarioService = require('../services/usuario.service');

async function listar(req, res) {
    try {
        const usuarios = await usuarioService.listar();
        res.status(200).json(usuarios);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao listar utilizadores', erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const { id } = req.params;
        const usuario = await usuarioService.buscarPorId(id);

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.status(200).json(usuario);
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao procurar utilizador', erro: erro.message });
    }
}

async function cadastrar(req, res) {
    try {
        const usuario = await usuarioService.cadastrar(req.body);
        res.status(201).json(usuario);
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao registar utilizador', erro: erro.message });
    }
}

async function atualizar(req, res) {
    try {
        const { id } = req.params;
        const usuario = await usuarioService.atualizarDadosCadastrais(id, req.body);

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.status(200).json({
            mensagem: 'Dados cadastrais atualizados com sucesso',
            usuario
        });
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao atualizar dados cadastrais', erro: erro.message });
    }
}

async function alterarPerfil(req, res) {
    try {
        const { id } = req.params;
        const { role, ativo } = req.body;

        const perfisValidos = ['Professor', 'Infraestrutura', 'Coordenador'];
        if (role && !perfisValidos.includes(role)) {
            return res.status(400).json({
                mensagem: 'Perfil inválido. Escolha entre Professor, Infraestrutura ou Coordenador.'
            });
        }

        const usuario = await usuarioService.alterarPerfilEPermissao(id, { role, ativo });

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.status(200).json({
            mensagem: 'Perfil e permissões atualizados com sucesso',
            usuario
        });
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao atualizar perfil', erro: erro.message });
    }
}

async function deletar(req, res) {
    try {
        const { id } = req.params;
        const deletado = await usuarioService.deletar(id);

        if (!deletado) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.status(200).json({ mensagem: 'Usuário foi deletado' });
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao eliminar utilizador', erro: erro.message });
    }
}

module.exports = {
    listar,
    buscarPorId,
    cadastrar,
    atualizar,
    alterarPerfil,
    deletar
};