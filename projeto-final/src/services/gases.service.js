const repo = require('../repositories/gases.repository');
//const repo = require('../repositories/usersGas.repository');

function listar() {
  return repo.listar();
}

function criar(dados) {
  return repo.criar(dados);
}

module.exports = { listar, criar };
