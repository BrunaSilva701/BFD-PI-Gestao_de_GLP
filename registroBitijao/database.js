const sqlite3 = require('sqlite3').verbose();

// Abre ou cria o banco
const db = new sqlite3.Database('./botijoes.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Banco SQLite conectado');
    }
});

// Cria tabela se não existir
db.run(`
    CREATE TABLE IF NOT EXISTS botijoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idCilindro TEXT UNIQUE,
        capacidade TEXT,
        status TEXT,
        fornecedor TEXT,
        dataFabricacao TEXT
    )
`);

module.exports = db;