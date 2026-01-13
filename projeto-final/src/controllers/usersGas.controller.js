const service = require('../services/usersGas.service');
const { EnderecoCliente, Gas, Cliente } = require('../../models');

async function criar(req, res) {
  const gas = await service.criar(req.body);
  res.status(201).json(gas);
}

async function listar(req, res) {
  res.json(await service.listar());
}

async function listarPorEndereco(req, res) {
  try {
  const {addressId} = req.params;
  const gasEndereco = await Gas.findAll({
    where: {addressId}, include: [
      {
        model: Cliente, as: 'cliente', attributes: ['nome', 'email']
      },
      { model: EnderecoCliente, as: 'enderecoCliente', attributes: ['rua', 'cidade', 'estado', 'cep']
      }
    ]
  });

  if (gasEndereco.length === 0) {
    return res.status(404).json({ mensagem: 'Nenhum registro de gás encontrado para este endereço.' });
  }
  return res.json(gasEndereco); 
  
} catch (error) {
  console.error('Erro ao listar registros de gás por endereço:', error);
  return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }  
}

async function atualizarPercentual(req, res) {
  await service.atualizarPercentual(req.params.id, req.body.percentual);
  res.json({ mensagem: 'Percentual atualizado' });
}

module.exports = {
  criar,
  listar,
  listarPorEndereco,
  atualizarPercentual
};
