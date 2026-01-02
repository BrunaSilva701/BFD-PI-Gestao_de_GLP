// Regras de negocio
// Calculo do percentual de gás

const repository = require('./gases.repository');
const { calcularStatus } = require('../utils/gasStatus');

function criarGas(data, callback) {
    data.percentualAtual = 100; //Percentual inicia em 100
    data.status = calcularStatus(100); // Calcula o status com base no percentual

    repository.create(data, callback);
}

function atualizarPercentual(id, percentual, callback) {
    const status = calcularStatus(percentual);
    repository.updatePercentual(id, percentual, status, callback);
    // repository.updatePercentual(Number(id), percentual, status, callback);
}

module.exports = { criarGas, atualizarPercentual };
