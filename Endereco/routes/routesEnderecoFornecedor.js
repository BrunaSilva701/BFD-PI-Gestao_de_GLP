const express = require("express");
const rotasF = express.Router();

const ControllersF = require("../controllers/controllersEnderecosFornecedores");

rotasF.get("admin/addresses", ControllersF.ListarEnderecosF);
//rotasF.get("/fornecedores/:fornecedorId/enderecos", ControllersF.ListarFornecedoresPorId);
rotasF.patch("/admin/:fornecedorId/addresses/:id", ControllersF.atualizarDadosEnderecoF);
rotasF.post("/admin/:fornecedorId/addresses", ControllersF.CriarEnderecoF);
rotasF.put("/admin/addresses/:id", ControllersF.AtualizarEnderecoF);
rotasF.delete("/admin/addresses/:id", ControllersF.RemoverEnderecoF);

module.exports = rotasF;