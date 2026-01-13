const { UserGas } = require('../../models');

function criar(dados) {
  return UserGas.create(dados);
}

function listar() {
  return UserGas.findAll();
}

/* function listarPorEndereco(addressId) {
  return UserGas.findAll({ where: { addressId } });
} */

function buscarPorId(id) {
  return UserGas.findByPk(id);
}

function atualizarPercentual(id, dados) {
  return UserGas.update(dados, { where: { id } });
}

// RETIRAR FUNCTION
function buscarPorSerial(serialIoT) {
  return UserGas.findOne({ where: { serialIoT } });
}

//ATUALIZAÇÃO COM O ESP32
// const { UserGas, Botijao } = require('../models');

// function buscarPorSerial(serialIoT) {
//   return UserGas.findOne({
//     where: { serialIoT },
//     include: [{ model: Botijao }]
//   });
// }


module.exports = {
  criar,
  listar,
  /* listarPorEndereco, */
  buscarPorId,
  atualizarPercentual,
  buscarPorSerial
};
