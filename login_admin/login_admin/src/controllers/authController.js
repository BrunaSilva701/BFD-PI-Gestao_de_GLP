const Admin = require('../models/Admin');
const { comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');

module.exports = {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      // 1️⃣ Verifica se o admin existe
      const admin = await Admin.findOne({ where: { email } });

      if (!admin) {
        return res.status(401).json({ message: 'Email ou senha inválidos' });
      }

      // 2️⃣ Compara a senha
      const senhaValida = await comparePassword(senha, admin.senha);

      if (!senhaValida) {
        return res.status(401).json({ message: 'Email ou senha inválidos' });
      }

      // 3️⃣ Gera token JWT
      const token = jwt.sign(
        { id: admin.id, role: 'admin' },
        'SECRET_ADMIN',
        { expiresIn: '1d' }
      );

      return res.json({ token });

    } catch (error) {
      console.error('ERRO LOGIN:', error);
      return res.status(500).json({
        message: 'Erro no servidor.',
        erro: error.message
      });
    }
  }
};




