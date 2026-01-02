// Regra de status de gás

function calcularStatus(percentual) {
    if (percentual < 20) return 'ATENÇÃO';
    if (percentual < 50) return 'CRITICO';
    return 'OK';
}

module.exports = { calcularStatus };
