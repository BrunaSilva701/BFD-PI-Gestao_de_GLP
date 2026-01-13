const { where } = require("sequelize");
const {EnderecoCliente, Cliente} = require("../../models");

async function CriarEndereco(req,res) {
    try{
        const { clienteId } = req.params;
        const {rua, numero, cidade, bairro, estado} = req.body;

        const cliente = await Cliente.findByPk(clienteId);
        if(!cliente){
            return res.status(404).json({erro: "Cliente não encontrado"});
        }
        const endereco = await EnderecoCliente.create({
            rua,
            numero,
            cidade,
            bairro,
            estado,
            clienteId
        });
        return res.status(201).json(endereco);
    } catch{
        return res.status(500).json({erro: "Erro ao criar endereço ao cliente"})
    }
}

async function ListarEnderecos(req,res) {
    try{
        const enderecos = await EnderecoCliente.findAll({
            include: {
                model: Cliente,
                as: "cliente"
            }
        });

        return res.json(enderecos);
    } catch {
        return res.status(500).json({erro: "Erro ao listar Endereços"})
    }
}

async function atualizarDadosEndereco(req, res) {
    try{
        const { id } = req.params;
        const dadosAtualizados = req.body;

        const enderecos = await EnderecoCliente.findByPk(id);

        if(!enderecos){
            return res.status(404).json({erro: "Endereço não encontrado"});
        }

        await enderecos.update(dadosAtualizados);
        return res.json({
            mensagem: "Endereço atualizado com sucesso", enderecos
        });
    } catch{
        return res.status(500).json({erro: "Erro ao atualizar endereço"});
    }
}
/* async function ListarEnderecosPorId(req, res) {
    try{
        const { clienteId } = req.params;

        const cliente = await Cliente.findByPk(clienteId);
        if(!cliente){
            return res.status(404).json({erro: "Cliente não encontrado"});
        }
        const enderecos = await EnderecoCliente.findAll({
            where: { clienteId },
            include: {
                model: Cliente,
                as: "cliente"
                
            }
        });
        return res.json(enderecos);
    } catch {
        return res.status(500).json({erro: "Erro ao buscar Cliente"})
    }
}  */

async function AtualizarEndereco(req, res) {
    try{
        const { id } = req.params;

        const [updated] = await EnderecoCliente.update(req.body, {
            where: { id }
        });

        if(updated === 0){
            return res.status(404).json({erro: "Endereço não encontrado"})
        }
        return res.json({mensagem: "Endereço atualizado com sucesso"});
    } catch {
        return res.status(500).json({erro: "Erro ao atualizar endereço"})
    }
}

async function RemoverEndereco(req, res) {
    try{
        const { id } = req.params;
    const remove = await EnderecoCliente.destroy({
        where: { id }
    });

    if(!remove){
        return res.status(404).json({erro: "Endereço não encontrado"});
    }

    return res.json({mensagem: "Endereço removido com sucesso"});
} catch{
    return res.status(500).json({erro: "Erro ao remover endereço"})
}
}

module.exports = {CriarEndereco, ListarEnderecos, AtualizarEndereco, RemoverEndereco, atualizarDadosEndereco};

