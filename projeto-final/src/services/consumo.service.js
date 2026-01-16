const consumo = require('../repositories/consumo.repository');

async function criar(dados) {
  const existe = await consumo.existeSnapshotNoDia(dados.botijaoId, dados.dataLeitura);

  if (existe) {
    throw new Error('Snapshot diário já existe para este botijão');
  }

  return consumo.criar(dados);
} 

function listarPorBotijao(botijaoId) {
  return consumo.listarPorBotijao(botijaoId);
}

function buscarPorData(botijaoId, data) {
  return consumo.buscarPorData(botijaoId, data);
}

function excluir(id) {
  return consumo.excluir(id);
}

function existeSnapshotNoDia(botijaoId, dataLeitura) {
  return consumo.existeSnapshotNoDia(botijaoId, dataLeitura);
}

async function snapshotDiario({ botijaoId, quantidade, dataLeitura }) {
  const existe = await consumo.existeSnapshotNoDia(
    botijaoId,
    dataLeitura
  );

  if (existe) {
    throw new Error('Snapshot diário já existe para este botijão');
  }

  return consumo.criar({ botijaoId, quantidade, dataLeitura });
}

module.exports = { criar, listarPorBotijao, buscarPorData, excluir, existeSnapshotNoDia, snapshotDiario };