const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// Logar admin
// POST - http://localhost:3000/login
router.post('/login', login);

module.exports = router;
