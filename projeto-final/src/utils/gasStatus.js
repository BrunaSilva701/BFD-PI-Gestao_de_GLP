// function calcularStatus(percentual) {
//   if (percentual > 60) return 'ALTO';
//   if (percentual > 30) return 'MEDIO';
//   if (percentual > 10) return 'BAIXO';
//   return 'CRITICO';
// }

// module.exports = { calcularStatus };


// ==========================
// 🔌 FUTURO – IOT COM PESO REAL (ESP32)
// ==========================

function calcularPercentualPorPeso(pesoAtual, pesoVazio, capacidade) {
  const pesoGas = pesoAtual - pesoVazio;
  if (pesoGas <= 0) return 0;
  return Math.min(100, Math.max(0, (pesoGas / capacidade) * 100));
}

function calcularStatus(percentual) {
  if (percentual > 60) return 'ALTO';
  if (percentual > 30) return 'MEDIO';
  if (percentual > 10) return 'BAIXO';
  return 'CRITICO';
}

module.exports = {
  calcularPercentualPorPeso,
  calcularStatus
};
