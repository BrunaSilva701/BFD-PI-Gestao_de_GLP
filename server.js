const express = require('express');
const app = express();

// Rotas
const adminRoutes = require('./src/routes/adminRoutes');

app.use(express.json());
app.use('/admin', adminRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


