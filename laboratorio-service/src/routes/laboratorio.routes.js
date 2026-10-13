const express = require('express');

const laboratorioController = require('../controllers/laboratorio.controller');

const router = express.Router();

router.get('/', laboratorioController.listar);

router.get('/:id', laboratorioController.buscarPorId);

router.post('/', laboratorioController.cadastrar);

module.exports = router;