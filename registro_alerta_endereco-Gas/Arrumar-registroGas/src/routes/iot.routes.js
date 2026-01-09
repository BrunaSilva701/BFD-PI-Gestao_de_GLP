const express = require('express');
const router = express.Router();
const controller = require('../controllers/iot.controller');

router.post('/iot/leitura', controller.receberLeitura);

module.exports = router;
