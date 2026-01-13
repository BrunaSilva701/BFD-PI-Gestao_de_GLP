const service = require('../services/gases.service');

async function listar(req, res) {
  const gases = await service.listar();
  res.json(gases);
}

async function criar(req, res) {
  const gas = await service.criar(req.body);
  res.status(201).json(gas);
}

module.exports = { listar, criar };
