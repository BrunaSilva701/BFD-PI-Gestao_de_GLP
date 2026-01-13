const { Alerta } = require('../../models');

function criar(dados) {
  return Alerta.create(dados);
}

module.exports = { criar };
