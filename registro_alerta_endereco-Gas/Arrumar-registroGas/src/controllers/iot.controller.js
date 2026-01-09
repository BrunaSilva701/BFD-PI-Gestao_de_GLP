const iotService = require('../services/iot.service');

async function receberLeitura(req, res) {
  const {
    dispositivo_id,
    peso,
    percentual,
    nivel
  } = req.body;

  await iotService.processarLeitura({
    dispositivoId: dispositivo_id,
    peso,
    percentual,
    nivel
  });

  res.json({ mensagem: 'Leitura processada com sucesso' });
}

module.exports = { receberLeitura };
