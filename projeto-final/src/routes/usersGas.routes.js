const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersGas.controller');

// Criar vínculo de gás para usuário (UserGas)
// POST - http://localhost:3000/users/gas
router.post('/users/gas', controller.criar);

// Listar todos os registros de gás dos usuários
// GET - http://localhost:3000/users/gas
router.get('/users/gas', controller.listar);

// Listar gás por endereço
// GET - http://localhost:3000/users/addresses/1/gases
router.get('/users/addresses/:addressId/gases', controller.listarPorEndereco);

// Atualizar percentual do gás (manual / IoT)
// PATCH - http://localhost:3000/users/gases/1/percentual
router.patch('/users/gases/:id/percentual', controller.atualizarPercentual);

module.exports = router;
