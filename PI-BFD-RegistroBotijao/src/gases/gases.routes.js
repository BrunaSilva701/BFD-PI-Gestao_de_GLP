// Instancia associada a cliente, endereço, IoT, percentual, status (pertence ao cliente)

const express = require('express');
const router = express.Router();
const service = require('./gases.service');
const repository = require('./gases.repository');

// POST/users/gas - Cria o gás (cliente)
router.post('/gas', (req, res) => {
    service.criarGas(req.body, (err) => {
        if (err) {
            return res.status(400).json({ erro: 'Serial IoT já registrado' });
        }
        res.status(201).json({ mensagem: 'Gás criado' });
    });
});

// GET/users/gas - Lista todos os gases (cliente)
router.get('/gas', (req, res) => {
    repository.findAll((err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});

// GET/users/enderecos/:enderecoId/gases - Lista os gases pelos endereços (cliente)
router.get('/enderecos/:enderecoId/gases', (req, res) => {
    repository.findByAddress(req.params.enderecoId, (err, rows) => {
        res.json(rows);
    });
});

// PATCH /users/gases/:id/percentual - Atualiza o percentual de gás (Utilizado pela IoT)
router.patch('/gases/:id/percentual', (req, res) => {
    service.atualizarPercentual(
        req.params.id,
        req.body.percentual,
        () => res.json({ mensagem: 'Percentual atualizado' })
    );
});

module.exports = router;
