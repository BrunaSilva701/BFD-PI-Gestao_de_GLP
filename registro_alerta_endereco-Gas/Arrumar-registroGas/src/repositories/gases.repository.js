const { Gas } = require('../models');

function listar() {
  return Gas.findAll();
}

function criar(dados) {
  return Gas.create(dados);
}

function buscarPorSerial(serialIoT) {
  return UserGas.findOne({ where: { serialIoT } });
}

module.exports = { listar, criar, buscarPorSerial };
