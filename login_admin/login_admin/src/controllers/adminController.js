const Admin = require('../models/Admin');
const { hashPassword } = require('../utils/hash');

const cadastrarAdmin = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha ) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    // Verificar se email ou CNPJ já existem
    const existe = await Admin.findOne({ where: { email } });
    if (existe) return res.status(400).json({ message: 'Email já cadastrado.' });


    const senhaHash = await hashPassword(senha);

    const admin = await Admin.create({ nome, email, senha: senhaHash });

    return res.status(201).json({ message: 'Administrador criado com sucesso.', admin });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor.' });
  }
};

module.exports = { cadastrarAdmin };
