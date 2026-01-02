--- Cria as tabelas de botijão (objeto fisico distribuido pelo fornecedor)

CREATE TABLE IF NOT EXISTS botijoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idCilindro TEXT UNIQUE,
    capacidade TEXT,
    status TEXT,
    fornecedor TEXT,
    dataFabricacao TEXT
);
