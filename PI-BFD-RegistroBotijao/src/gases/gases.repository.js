// Responsavel pelo SQL

const db = require('../database');

function create(data, callback) {
    const sql = `
        INSERT INTO gases
        (botijaoId, enderecoId, serialIoT, percentualAtual, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.run(
        sql,
        [
            data.botijaoId,
            data.enderecoId,
            data.serialIoT,
            data.percentualAtual,
            data.status
        ],
        callback
    );
}

function findAll(callback) {
    db.all('SELECT * FROM gases WHERE isActive = 1', [], callback);
}

function findByAddress(enderecoId, callback) {
    db.all(
        'SELECT * FROM gases WHERE enderecoId = ? AND isActive = 1',
        [enderecoId],
        callback
    );
}

function updatePercentual(id, percentual, status, callback) {
    db.run(
        `UPDATE gases SET percentualAtual = ?, status = ? WHERE id = ?`,
        [percentual, status, id],
        callback
    );
}


// Caso a tabela não atualize o opereador fica sabendo
// function updatePercentual(id, percentual, status, callback) {
//     db.run(
//         `UPDATE gases 
//          SET percentualAtual = ?, status = ?
//          WHERE id = ?`,
//         [percentual, status, id],
//         function (err) {
//             if (err) return callback(err);

//             if (this.changes === 0) {
//                 return callback(new Error('Nenhuma linha atualizada'));
//             }

//             callback(null);
//         }
//     );
// }

module.exports = {
    create,
    findAll,
    findByAddress,
    updatePercentual
};
