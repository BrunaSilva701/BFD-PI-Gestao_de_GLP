const { ConsumoHistorico } = require('../../models');
const { Op } = require('sequelize');

function criar(dados) {
  return ConsumoHistorico.create(dados);
}

function listarPorBotijao(botijaoId) {
    return ConsumoHistorico.findAll({ where: { botijaoId }, order: [['dataLeitura', 'DESC']] });
}

function buscarPorData(botijaoId, data) {
    return ConsumoHistorico.findAll({ where: { botijaoId, dataLeitura: data } });
}

function excluir(id) {
  return ConsumoHistorico.destroy({ where: { id } });
}

function existeSnapshotNoDia(botijaoId, dataLeitura) {
  const dataInicio = new Date(dataLeitura);
  dataInicio.setHours(0, 0, 0, 0);
  
  const dataFim = new Date(dataLeitura);
  dataFim.setHours(23, 59, 59, 999);
  
  return ConsumoHistorico.findOne({
    where: {
      botijaoId,
      dataLeitura: {
        [Op.between]: [dataInicio, dataFim]
      }
    }
  });
}

module.exports = { criar, listarPorBotijao, buscarPorData, excluir, existeSnapshotNoDia };