const express = require("express");
const rotas = express.Router();

const Controllers = require("../controllers/controllersEnderecoClientes");

// Listar todos os endereços de clientes
// GET - http://localhost:3000/users/addresses
rotas.get("/users/addresses", Controllers.ListarEnderecos);

//rotas.get("/clientes/:clienteId/enderecos", Controllers.ListarEnderecosPorId);

// Atualizar PARCIALMENTE um endereço (PATCH)
// PATCH - http://localhost:3000/users/1/addresses/1
rotas.patch("/users/:clienteId/addresses/:id", Controllers.atualizarDadosEndereco);

// Criar endereço para um cliente específico
// POST - http://localhost:3000/users/1/addresses
rotas.post("/users/:clienteId/addresses", Controllers.CriarEndereco);

//rotas.post("/users/addresses", Controllers.CriarEndereco);

// Atualizar endereço COMPLETO (PUT)
// PUT - http://localhost:3000/users/addresses/1
rotas.put("/users/addresses/:id", Controllers.AtualizarEndereco);

// Remover endereço
// DELETE - http://localhost:3000/users/addresses/1
rotas.delete("/users/addresses/:id", Controllers.RemoverEndereco);

module.exports = rotas;