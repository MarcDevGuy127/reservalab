const express = require('express');

const usuarioController = require('../controllers/usuario.controller');

const router = express.Router();

router.get('/', usuarioController.listar);

router.get('/:id', usuarioController.buscarPorId);

router.put('/:id', usuarioController.atualizar);

module.exports = router;