const express = require('express');
const usuarioController = require('../controllers/usuario.controller');
const { autorizarPerfis } = require('../middlewares/perfil.middleware');

const router = express.Router();

router.get('/', usuarioController.listar);

router.get('/:id', usuarioController.buscarPorId);

router.post('/', usuarioController.cadastrar);

router.put('/:id', usuarioController.atualizar);

router.patch('/:id/perfil', autorizarPerfis('Coordenador'), usuarioController.alterarPerfil);

router.delete('/:id', autorizarPerfis('Coordenador'), usuarioController.deletar);

module.exports = router;