const { Botijao } = require('../../models');

function criar(dados) {
  return Botijao.create(dados);
}

function listar() {
  return Botijao.findAll();
}

function buscarPorId(id) {
  return Botijao.findByPk(id);
}

function atualizar(id, dados) {
  return Botijao.update(dados, { where: { id } });
}

module.exports = {criar, listar, buscarPorId, atualizar };