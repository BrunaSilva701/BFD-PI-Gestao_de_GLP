const express = require('express');
const router = express.Router();
const { cadastrarAdmin } = require('../controllers/adminController');

router.post('/cadastrar', cadastrarAdmin);

module.exports = router;
