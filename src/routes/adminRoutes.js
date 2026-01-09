
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/register', adminController.register);

// NOVO: listar todos os admins
router.get('/all', adminController.listAll);

module.exports = router;


