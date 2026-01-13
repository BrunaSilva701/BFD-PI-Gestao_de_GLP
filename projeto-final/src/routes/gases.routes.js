const express = require('express');
const router = express.Router();
const controller = require('../controllers/gases.controller');

// Listar tipos de gás
// GET - http://localhost:3000/gases
router.get('/gases', controller.listar);

// Criar tipo de gás
// POST - http://localhost:3000/gases
router.post('/gases', controller.criar);

module.exports = router;
