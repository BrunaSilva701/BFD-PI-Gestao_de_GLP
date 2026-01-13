const express = require('express');
const router = express.Router();
const { cadastrarAdmin } = require('../controllers/adminController');

// Cadastrar admin
//POST - http://localhost:3000/cadastrar
router.post('/cadastrar', cadastrarAdmin);

module.exports = router;
