const express = require("express");
const rotasF = express.Router();

const ControllersF = require("../controllers/controllersEnderecosFornecedores");

// Listar todos os endereços de fornecedores
// GET - http://localhost:3000/admin/addresses
rotasF.get("/admin/addresses", ControllersF.ListarEnderecosF);

//rotasF.get("/fornecedores/:fornecedorId/enderecos", ControllersF.ListarFornecedoresPorId);

// Atualizar PARCIALMENTE endereço de fornecedor
// PATCH - http://localhost:3000/admin/2/addresses/1
rotasF.patch("/admin/:fornecedorId/addresses/:id", ControllersF.atualizarDadosEnderecoF);

// Criar endereço para um fornecedor
// POST - http://localhost:3000/admin/2/addresses
rotasF.post("/admin/:fornecedorId/addresses", ControllersF.CriarEnderecoF);

// Atualizar endereço COMPLETO
// PUT - http://localhost:3000/admin/addresses/1
rotasF.put("/admin/addresses/:id", ControllersF.AtualizarEnderecoF);

// Remover endereço de fornecedor
// DELETE - http://localhost:3000/admin/addresses/1
rotasF.delete("/admin/addresses/:id", ControllersF.RemoverEnderecoF);

module.exports = rotasF;