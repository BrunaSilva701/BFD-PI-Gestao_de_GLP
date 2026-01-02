--- Cria a tabela de gases (associado ao cliente, endereço, iot, percentual e status)
--- Cria o vinculo de IoT -> Endereço -> Botijão

CREATE TABLE IF NOT EXISTS gases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    botijaoId INTEGER NOT NULL,
    enderecoId TEXT NOT NULL,

    serialIoT TEXT UNIQUE,
    percentualAtual REAL NOT NULL DEFAULT 100, --- Por estar definido como "rea" se algo falhar no insert o percentual fica NULL, ao definir o "not null default" garente que sempre irá iniciar com aquele dado.
    status TEXT CHECK (status IN ('OK','ATENCAO','CRITICO')) NOT NULL DEFAULT 'OK',
    isActive INTEGER DEFAULT 1,

    createdAt TEXT DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (botijaoId) REFERENCES botijoes(id)
);
