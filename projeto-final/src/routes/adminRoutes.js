const express = require('express');
const router = express.Router();

const { 
  cadastrarAdmin,
  listarClientes,
  listarClientePorEmail
} = require('../controllers/adminController');

// cadastro do admin
router.post('/cadastrar', cadastrarAdmin);

// home do admin — lista geral
router.get('/clients', listarClientes);

// detalhe de um cliente pelo e-mail
router.get('/clients/:email', listarClientePorEmail);

module.exports = router;
