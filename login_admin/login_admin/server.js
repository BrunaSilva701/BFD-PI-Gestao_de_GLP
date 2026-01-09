const express = require('express');
const app = express();
const sequelize = require('./src/database/index');

const authRoutes = require('./src/routes/authRoutes');


app.use(express.json());
app.use('/admin/auth', authRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com SQLite feita com sucesso.');

    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
  }
};

start();


