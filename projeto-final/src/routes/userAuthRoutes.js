const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
// const authMiddleware = require('../middlewares/auth');

const authController = require('../controllers/userAuthController');
const authMiddleware = require('../middlewares/authUser');


//Rota de login
router.post('/login', authController.login);
//Rota recuperação de senha
router.post('/forgot-password', authController.esqueciSenha);
//Rota redefinição de senha
router.post('/reset-password', authController.resetarSenha);


//Rota de alterar senha protegida pelo middware
router.patch('/profile/password', authMiddleware, authController.alterarSenha);
//Rota de alterar email protegida pelo middware
router.patch('/profile/email', authMiddleware, authController.alterarEmail);

module.exports = router;