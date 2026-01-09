const repo = require('../repositories/gases.repository');

function listar() {
  return repo.listar();
}

function criar(dados) {
  return repo.criar(dados);
}

module.exports = { listar, criar };
