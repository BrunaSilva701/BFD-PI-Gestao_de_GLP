const express = require('express');
const router = express.Router();
const controller = require('../controllers/botijoes.controller');

// Listar todos os botijões
// GET - http://localhost:3000/botijoes
router.get('/botijoes', controller.listar);

// Buscar um botijão por ID
// GET - http://localhost:3000/botijoes/1
router.get('/botijoes/:id', controller.buscar);

// Criar um botijão
// POST - http://localhost:3000/botijoes
router.post('/botijoes', controller.criar);

module.exports = router;
