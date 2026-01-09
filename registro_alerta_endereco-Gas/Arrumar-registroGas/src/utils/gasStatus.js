// RETIRA ESSA SEÇÃO
function calcularStatus(percentual) {
  // function calcularStatus(nivelAtual / capacidade) {
  //const percentual = (nivelAtual / capacidade) * 100;

  if (percentual > 60) return 'ALTO';
  if (percentual > 30) return 'MEDIO';
  if (percentual > 10) return 'BAIXO';
  return 'CRITICO';
}

module.exports = { calcularStatus };


// ATUALIZAÇÃO COM O ESP32
// function calcularPercentualPorPeso(pesoAtual, pesoVazio, capacidade) {
//   const pesoGas = pesoAtual - pesoVazio;

//   if (pesoGas <= 0) return 0;

//   const percentual = (pesoGas / capacidade) * 100;

//   return Math.max(0, Math.min(100, percentual));
// }

// function calcularStatus(percentual) {
//   if (percentual > 60) return 'ALTO';
//   if (percentual > 30) return 'MEDIO';
//   if (percentual > 10) return 'BAIXO';
//   return 'CRITICO';
// }

// module.exports = {
//   calcularPercentualPorPeso,
//   calcularStatus
// };
