const { Cliente } = require('../../models');
const bcrypt = require('bcrypt');

async function criar(req, res) {
  const { nome, email, senha } = req.body;

  const hash = await bcrypt.hash(senha, 10);

  const cliente = await Cliente.create({
    nome,
    email,
    senha: hash
  });

  res.status(201).json(cliente);
}

async function listar(req, res) {
  const clientes = await Cliente.findAll();
  res.json(clientes);
}

module.exports = { criar, listar };
