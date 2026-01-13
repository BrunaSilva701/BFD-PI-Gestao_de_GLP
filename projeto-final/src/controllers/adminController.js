// Cadastro

const { Admin } = require('../../models');
const { hashPassword } = require('../utils/hash');

const cadastrarAdmin = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha)
    return res.status(400).json({ message: 'Campos obrigatórios' });

  const existe = await Admin.findOne({ where: { email } });
  if (existe)
    return res.status(400).json({ message: 'Email já cadastrado' });

  const senhaHash = await hashPassword(senha);

  const admin = await Admin.create({
    nome,
    email,
    senha: senhaHash
  });

  res.status(201).json(admin);
};

module.exports = { cadastrarAdmin };
