const express = require("express");
const rotas = express.Router();

const Controllers = require("../controllers/controllersEnderecoClientes");

rotas.get("/users/addresses", Controllers.ListarEnderecos);
//rotas.get("/clientes/:clienteId/enderecos", Controllers.ListarEnderecosPorId);
rotas.patch("/users/:clienteId/addresses/:id", Controllers.atualizarDadosEndereco);
rotas.post("/users/:clienteId/addresses", Controllers.CriarEndereco);
rotas.put("/users/addresses/:id", Controllers.AtualizarEndereco);
rotas.delete("users/addresses/:id", Controllers.RemoverEndereco);

module.exports = rotas;