const express = require("express");
const { sequelize } = require("./models");
const app = express();

// IMPORT DAS ROTAS
const enderecoClienteRoutes = require("./routes/routesEnderecoCliente")
const enderecoFornecedorRoutes = require("./routes/routesEnderecoFornecedor");

// MIDDLEWARE PARA JSON
app.use(express.json());

// ROTAS
app.use(enderecoClienteRoutes);
app.use(enderecoFornecedorRoutes);

// ROTA TESTE (opcional)
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

// PORTA
const PORT = 3000;

sequelize.sync({ alter: false })
  .then(() => {
    console.log("Banco sincronizado com sucesso");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("Erro ao sincronizar banco:", err);
  });


