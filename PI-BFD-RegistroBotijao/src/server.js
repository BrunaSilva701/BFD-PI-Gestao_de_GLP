// Executa os schemas
const fs = require('fs');
const db = require('./database');

db.exec(fs.readFileSync('src/database/botijoes.sql').toString());
db.exec(fs.readFileSync('src/database/gases.sql').toString());

const express = require('express');
const cors = require('cors');

const botijoesRoutes = require('./botijoes/botijoes.routes');
const gasesRoutes = require('./gases/gases.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/botijoes', botijoesRoutes);
app.use('/users', gasesRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});


// const express = require('express');
// const cors = require('cors');
// const db = require('./database');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Rota: salvar botijão
// app.post('/botijoes', (req, res) => {
//     const { idCilindro, capacidade, status, fornecedor, dataFabricacao } = req.body;

//     const sql = `
//         INSERT INTO botijoes
//         (idCilindro, capacidade, status, fornecedor, dataFabricacao)
//         VALUES (?, ?, ?, ?, ?)
//     `;

//     db.run(sql, [idCilindro, capacidade, status, fornecedor, dataFabricacao], function (err) {
//         if (err) {
//             return res.status(400).json({ erro: 'Botijão já cadastrado' });
//         }

//         res.json({
//             id: this.lastID,
//             mensagem: 'Botijão salvo com sucesso'
//         });
//     });
// });

// // Rota: buscar botijão
// app.get('/botijoes/:id', (req, res) => {
//     db.get(
//         'SELECT * FROM botijoes WHERE idCilindro = ?',
//         [req.params.id],
//         (err, row) => {
//             if (err) {
//                 return res.status(500).json({ erro: err.message });
//             }
//             if (!row) {
//                 return res.status(404).json({ erro: 'Botijão não encontrado' });
//             }
//             res.json(row);
//         }
//     );
// });

// // Rota: listar todos
// app.get('/botijoes', (req, res) => {
//     db.all('SELECT * FROM botijoes', [], (err, rows) => {
//         if (err) {
//             return res.status(500).json({ erro: err.message });
//         }
//         res.json(rows);
//     });
// });

// app.listen(3000, () => {
//     console.log('Servidor rodando em http://localhost:3000');
// });
