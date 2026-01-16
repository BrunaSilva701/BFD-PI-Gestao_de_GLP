const express = require('express');
const router = express.Router();
const controller = require('../controllers/consumo.controller');

// Criar consumo
// POST - http://localhost:3000/consumo
router.post('/consumo', controller.criar);

// Listar consumo por botijão
// GET - http://localhost:3000/consumo/botijao/:botijaoId
router.get('/consumo/botijao/:botijaoId', controller.listarPorBotijao);

// Buscar consumo por data
// GET - http://localhost:3000/consumo/botijao/:botijaoId/data/:data
router.get('/consumo/botijao/:botijaoId/data/:data', controller.buscarPorData);

// Excluir consumo
// DELETE - http://localhost:3000/consumo/:id
router.delete('/consumo/:id', controller.excluir);

// Criar snapshot diário
// POST - http://localhost:3000/consumo/snapshot-diario
router.post('/consumo/snapshot-diario', controller.snapshotDiario);

module.exports = router;