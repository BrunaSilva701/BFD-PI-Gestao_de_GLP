const express = require('express');
const router = express.Router();

router.use(require('./authRoutes'));
router.use(require('./adminRoutes'));
router.use(require('./routesEnderecoCliente'));
router.use(require('./routesEnderecoFornecedor'));
router.use(require('./usersGas.routes'));
router.use(require('./gases.routes'));
router.use(require('./botijoes.routes'));
router.use(require('./iot.routes'));
router.use(require('./userAuthRoutes'));
router.use(require('./clienteRoutes'));
router.use(require('./user.routes'));
//router.use(require('./companyRoutes')); Manter companyRoutes seria duplicação de dominio, uma vez que admin já existe

module.exports = router;
