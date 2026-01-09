const express = require('express');
const router = express.Router();
const controller = require('../controllers/gases.controller');

router.get('/gases', controller.listar);
router.post('/gases', controller.criar);

module.exports = router;
