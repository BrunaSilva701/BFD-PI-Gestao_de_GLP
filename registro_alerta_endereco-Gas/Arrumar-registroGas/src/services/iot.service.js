const usersGasRepo = require('../repositories/usersGas.repository');
const usersGasService = require('./usersGas.service');

async function processarLeitura({ dispositivoId, percentual }) {
  const userGas = await usersGasRepo.buscarPorSerial(dispositivoId);

  if (!userGas) {
    throw new Error('Dispositivo IoT não registrado');
  }

  return usersGasService.atualizarPercentual(userGas.id, percentual);
}

module.exports = { processarLeitura };

// ATUALIZAÇÃO COM O ESP32
// const usersGasRepo = require('../repositories/usersGas.repository');
// const { 
//   calcularPercentualPorPeso,
//   calcularStatus 
// } = require('../utils/gasStatus');

// async function processarLeitura({ dispositivoId, peso }) {

//   const userGas = await usersGasRepo.buscarPorSerial(dispositivoId);

//   if (!userGas || !userGas.Botijao) {
//     throw new Error('Botijão não encontrado para este dispositivo');
//   }

//   const botijao = userGas.Botijao;

//   // 🔴 AQUI A MUDANÇA PRINCIPAL
//   const percentual = calcularPercentualPorPeso(
//     peso,
//     botijao.pesoVazio,
//     botijao.capacidade
//   );

//   const status = calcularStatus(percentual);

//   await usersGasRepo.atualizarPercentual(userGas.id, {
//     percentualAtual: percentual,
//     status
//   });

//   return { percentual, status };
// }

// module.exports = { processarLeitura };
