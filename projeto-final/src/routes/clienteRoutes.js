const express = require('express');
const router = express.Router();
const controller = require('../controllers/clienteController');

router.post('/clientes', controller.criar);
router.get('/clientes', controller.listar);

module.exports = router;
