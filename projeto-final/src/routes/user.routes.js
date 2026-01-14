// Visualização de perefil

const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

// Rota auxiliar para criar um usuário (para teste)
router.post('/', UserController.create);

// Middleware de simulação de autenticação
// Ele só se aplica às rotas abaixo dele
router.use((req, res, next) => {
  console.log('Middleware de autenticação simulado executado.');
  req.userId = 1; // Força o ID 1, simulando um token JWT decodificado
  next();
});

// Rota protegida
router.get('/profile', UserController.profile);

module.exports = router;