const service = require('../services/botijoes.service');

async function listar(req, res) {
  const botijoes = await service.listar();
  res.json(botijoes);
}

async function criar(req, res) {
  const botijao = await service.criar(req.body);
  res.status(201).json(botijao);
}

async function buscar(req, res) {
  const botijao = await service.buscarPorId(req.params.id);
  res.json(botijao);
}

module.exports = { listar, criar, buscar };
