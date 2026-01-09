const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  console.log("==== Registros da tabela admins ====");

  db.all("SELECT * FROM admins", (err, rows) => {
    if (err) {
      console.error("Erro ao consultar:", err);
      return;
    }
    if (rows.length === 0) {
      console.log("Nenhum registro encontrado.");
    } else {
      rows.forEach(row => {
        console.log(row);
      });
    }
  });
});

db.close();
