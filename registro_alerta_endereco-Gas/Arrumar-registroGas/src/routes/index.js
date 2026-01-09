const express = require('express');
const router = express.Router();

router.use(require('./iot.routes'));
router.use(require('./gases.routes'));
router.use(require('./botijoes.routes'));
router.use(require('./usersGas.routes'));

module.exports = router;