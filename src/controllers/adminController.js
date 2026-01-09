const { Admin } = require('../../models'); // usa o Sequelize CLI models
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { empresa, cnpj, email, senha } = req.body;

    // Validação básica
    if (!empresa || !cnpj || !email || !senha) {
      return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
    }

    // Verifica se o email já existe
    const existe = await Admin.findOne({ where: { email } });
    if (existe) {
      return res.status(400).json({ erro: 'Email já cadastrado' });
    }

    // Criptografa a senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Cria o admin
    const admin = await Admin.create({
      empresa,
      cnpj,
      email,
      senha: senhaHash
    });

    return res.status(201).json({
      mensagem: 'Admin cadastrado com sucesso',
      adminId: admin.id
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao cadastrar admin' });
  }
};



exports.register = async (req, res) => {
  try {
    const { empresa, cnpj, email, senha } = req.body;

    if (!empresa || !cnpj || !email || !senha) {
      return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
    }

    const existe = await Admin.findOne({ where: { email } });
    if (existe) return res.status(400).json({ erro: 'Email já cadastrado' });

    const senhaHash = await bcrypt.hash(senha, 10);

    const admin = await Admin.create({ empresa, cnpj, email, senha: senhaHash });

    return res.status(201).json({
      mensagem: 'Admin cadastrado com sucesso',
      adminId: admin.id
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao cadastrar admin' });
  }
};

// NOVO: Listar todos os admins
exports.listAll = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: ['id', 'empresa', 'cnpj', 'email', 'createdAt', 'updatedAt'] // não mostrar senha
    });
    return res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao listar admins' });
  }
};



exports.register = async (req, res) => {
  try {
    const { empresa, cnpj, email, senha } = req.body;

    if (!empresa || !cnpj || !email || !senha) {
      return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
    }

    const existe = await Admin.findOne({ where: { email } });
    if (existe) return res.status(400).json({ erro: 'Email já cadastrado' });

    const senhaHash = await bcrypt.hash(senha, 10);

    const admin = await Admin.create({ empresa, cnpj, email, senha: senhaHash });

    return res.status(201).json({
      mensagem: 'Admin cadastrado com sucesso',
      adminId: admin.id
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao cadastrar admin' });
  }
};

