const express = require('express');
const router = express.Router();
const controller = require('../controllers/iot.controller');

// Exemplo no Insomnia (simulação IoT)
// POST - http://localhost:3000/iot/leitura
router.post('/iot/leitura', controller.receberLeitura);

module.exports = router;
