const repo = require('../repositories/botijoes.repository');
//const repo = require('../repositories/usersGas.repository');

function listar() {
  return repo.listar();
}

function buscarPorId(id) {
  return repo.buscarPorId(id);
}

function criar(dados) {
  return repo.criar(dados);
}

module.exports = { listar, buscarPorId, criar };
