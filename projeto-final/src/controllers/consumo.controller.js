const service = require('../services/consumo.service');

async function criar(req, res) {
  // Validar se já existe snapshot com mesmo botijaoId e dataLeitura
  const existe = await service.existeSnapshotNoDia(req.body.botijaoId, req.body.dataLeitura);
  
  if (existe) {
    return res.status(409).json({ erro: 'Snapshot diário já existe para este botijão' });
  }
  
  const consumo = await service.criar(req.body);
  res.status(201).json(consumo);
}

async function listarPorBotijao(req, res) {
  const consumo = await service.listarPorBotijao(req.params.botijaoId);
  res.json(consumo);
}

async function buscarPorData(req, res) {
  const { botijaoId, data } = req.params;
  const consumo = await service.buscarPorData(botijaoId, data);
  res.json(consumo);
}

async function excluir(req, res) {
  const { id } = req.params;
  await service.excluir(id);
  res.status(204).send();
}

async function snapshotDiario(req, res) {
  const snapshot = await service.snapshotDiario(req.body);
  res.status(201).json(snapshot);
}

module.exports = { criar, listarPorBotijao, buscarPorData, excluir, snapshotDiario };