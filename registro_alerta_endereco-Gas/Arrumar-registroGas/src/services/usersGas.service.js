const repo = require('../repositories/usersGas.repository');
const alertaRepo = require('../repositories/alertas.repository');
const { calcularStatus } = require('../utils/gasStatus');
const { EnderecoCliente, Gas, Cliente } = require('../models');

async function criar(dados) {
  const status = calcularStatus(100, 100); // inicia cheio
  return repo.criar({
    ...dados,
    percentualAtual: 100,
    status,
    isActive: true
  });
}

function listar() {
  return repo.listar();
}

/* function listarPorEndereco(addressId) {

  return repo.listarPorEndereco(addressId);
} */

async function atualizarPercentual(id, percentual) {
  const status = calcularStatus(percentual);

  await repo.atualizarPercentual(id, {
    percentualAtual: percentual,
    status
  });

  if (status === 'CRITICO') {
    await alertaRepo.criar({
      tipo: 'NIVEL_CRITICO',
      mensagem: 'Nível de gás crítico',
      nivel: status,
      ativo: true,
      userGasId: id
    });
  }

  return { percentual, status };
}

module.exports = {
  criar,
  listar,
  /* listarPorEndereco, */
  atualizarPercentual
};
