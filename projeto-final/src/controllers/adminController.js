
const { Admin, Cliente, EnderecoCliente, UserGas, Botijao } = require('../../models');
const { hashPassword } = require('../utils/hash');


const cadastrarAdmin = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha)
      return res.status(400).json({ message: 'Campos obrigatórios' });

    const existe = await Admin.findOne({ where: { email } });
    if (existe)
      return res.status(400).json({ message: 'Email já cadastrado' });

    const senhaHash = await hashPassword(senha);

    const admin = await Admin.create({
      nome,
      email,
      senha: senhaHash
    });

    return res.status(201).json(admin);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};



const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: [
        {
          model: EnderecoCliente,
          as: 'enderecos',
          include: [
            {
              model: UserGas,
              as: 'userGases',
              include: [
                {
                  model: Botijao,
                  as: 'Botijao'
                }
              ]
            }
          ]
        }
      ]
    });

    return res.json(clientes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};


/**
 * Lista apenas UM cliente pelo email
 */
const listarClientePorEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const cliente = await Cliente.findOne({
      where: { email },
      include: [
        {
          model: EnderecoCliente,
          as: 'enderecos',
          include: [
            {
              model: UserGas,
              as: 'userGases',
              include: [
                {
                  model: Botijao,
                  as: 'Botijao'
                }
              ]
            }
          ]
        }
      ]
    });

    if (!cliente)
      return res.status(404).json({ message: 'Cliente não encontrado' });

    return res.json(cliente);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  cadastrarAdmin,
  listarClientes,
  listarClientePorEmail
};
