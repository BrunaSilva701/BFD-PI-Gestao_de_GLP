// Responsavel pelo SQL

const db = require('../database');

function create(botijao, callback) {
    const sql = `
        INSERT INTO botijoes
        (idCilindro, capacidade, status, fornecedor, dataFabricacao)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.run(
        sql,
        [
            botijao.idCilindro,
            botijao.capacidade,
            botijao.status,
            botijao.fornecedor,
            botijao.dataFabricacao
        ],
        callback
    );
}

function findAll(callback) {
    db.all('SELECT * FROM botijoes', [], callback);
}

function findBySerial(idCilindro, callback) {
    db.get(
        'SELECT * FROM botijoes WHERE idCilindro = ?',
        [idCilindro],
        callback
    );
}

module.exports = { create, findAll, findBySerial };
