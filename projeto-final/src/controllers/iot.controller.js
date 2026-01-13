const service = require('../services/iot.service');

async function receberLeitura(req, res) {
  try {
    const result = await service.processarLeitura(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

module.exports = { receberLeitura };
