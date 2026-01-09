const express = require('express');
const app = express();

const db = require('./models');
const routes = require('./routes');

app.use(express.json());
app.use(routes);

db.sequelize.authenticate()
  .then(() => {
    console.log('Banco conectado');
    app.listen(3000, () => console.log('Servidor rodando na porta http://localhost:3000'));
  })
  .catch(err => console.error(err));
