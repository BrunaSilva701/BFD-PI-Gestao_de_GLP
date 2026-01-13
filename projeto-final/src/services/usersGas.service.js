const repo = require('../repositories/usersGas.repository');
const alertaRepo = require('../repositories/alertas.repository');
const { calcularStatus } = require('../utils/gasStatus');

async function criar(dados) {
  const status = calcularStatus(100);
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

// Alerta
async function atualizarPercentual(id, percentual) {
  const status = calcularStatus(percentual);

  await repo.atualizarPercentual(id, {
    percentualAtual: percentual,
    status
  });

  switch (status) {
   case 'CRITICO' :
    await alertaRepo.criar({
      tipo: 'NIVEL_CRITICO',
      mensagem: 'Nível de gás crítico',
      nivel: status,
      ativo: true,
      userGasId: id
    });
    break;

   case 'BAIXO' : 
    await alertaRepo.criar({
      tipo: 'NIVEL_BAIXO',
      mensagem: 'Nível de gás baixo',
      nivel: status,
      ativo: true,
      userGasId: id
    });

    break;

  return { percentual, status };
  }
}

module.exports = { criar, listar, atualizarPercentual };
