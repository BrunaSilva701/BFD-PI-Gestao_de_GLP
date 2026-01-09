const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersGas.controller');

router.post('/users/gas', controller.criar);
router.get('/users/gas', controller.listar);
router.get('/users/addresses/:addressId/gases', controller.listarPorEndereco);
router.patch('/users/gases/:id/percentual', controller.atualizarPercentual);

module.exports = router;
