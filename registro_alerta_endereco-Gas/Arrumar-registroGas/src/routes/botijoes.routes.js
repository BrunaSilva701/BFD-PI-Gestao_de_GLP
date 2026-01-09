const express = require('express');
const router = express.Router();
const controller = require('../controllers/botijoes.controller');

router.get('/botijoes', controller.listar);
router.get('/botijoes/:id', controller.buscar);
router.post('/botijoes', controller.criar);

module.exports = router;
