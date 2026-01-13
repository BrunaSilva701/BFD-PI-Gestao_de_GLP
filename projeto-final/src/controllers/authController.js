//Login
const { Admin } = require('../../models');
const { comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, senha } = req.body;

  const admin = await Admin.findOne({ where: { email } });
  if (!admin)
    return res.status(401).json({ message: 'Credenciais inválidas' });

  const ok = await comparePassword(senha, admin.senha);
  if (!ok)
    return res.status(401).json({ message: 'Credenciais inválidas' });

  const token = jwt.sign({ id: admin.id }, 'SECRET_ADMIN', {
    expiresIn: '1d'
  });

  res.json({ token });
};

module.exports = { login };
