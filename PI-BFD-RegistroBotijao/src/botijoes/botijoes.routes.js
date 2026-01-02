// Responsavel pelo HTTP
// Objeto fisico pertencente ao fornecedor. O fornecedor cadastra o botijão

const express = require('express');
const router = express.Router();
const repository = require('./botijoes.repository');

// POST /botijoes - Cria botijões (Fornecedor)
router.post('/', (req, res) => {
    repository.create(req.body, function (err) {
        if (err) {
            return res.status(400).json({ erro: 'Botijão já cadastrado' });
        }
        res.status(201).json({ mensagem: 'Botijão criado' });
    });
});

// GET /botijoes - Lista todos os botijões (Fornecedor e Admin)
router.get('/', (req, res) => {
    repository.findAll((err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});

// GET /botijoes/:id - Busca o botijão pelo ID (Fornecedor)
router.get('/:id', (req, res) => {
    repository.findBySerial(req.params.id, (err, row) => {
        if (!row) {
            return res.status(404).json({ erro: 'Botijão não encontrado' });
        }
        res.json(row);
    });
});

module.exports = router;
