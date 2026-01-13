require('dotenv').config(); // Carrega o .env
// console.log('JWT:', process.env.JWT_SECRET);

const express = require('express');
const app = express();

const db = require('../models');
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('API rodando');
});

db.sequelize.authenticate()
  .then(() => {
    console.log('Banco conectado');
    app.listen(3000, () =>
      console.log('Servidor rodando em http://localhost:3000')
    );
  })
  .catch(console.error);
