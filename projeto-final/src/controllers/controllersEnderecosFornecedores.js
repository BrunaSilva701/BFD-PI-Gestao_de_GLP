const { where } = require("sequelize");
const {EnderecoFornecedor, Admin} = require("../../models");

async function CriarEnderecoF(req,res) {
    try{
        const { fornecedorId } = req.params;
        const {rua, numero, cidade, bairro, estado} = req.body;

        const admin = await Admin.findByPk(fornecedorId);
        if(!admin){
            return res.status(404).json({erro: "Fornecedor não encontrado"});
        }
        const endereco = await EnderecoFornecedor.create({
            rua,
            numero,
            cidade,
            bairro,
            estado,
            fornecedorId
        });
        return res.status(201).json(endereco);
    } catch{
        return res.status(500).json({erro: "Erro ao criar endereço ao fornecedor"});
    }
}

async function ListarEnderecosF(req,res) {
    try{
        const enderecos = await EnderecoFornecedor.findAll({
            include: {
                model: Admin,
                as: "Admins"
            }
        });

        return res.json(enderecos);
    } catch {
        return res.status(500).json({erro: "Erro ao listar Endereços"})
    }
}

/* async function ListarFornecedoresPorId(req, res) {
    try{
        const { fornecedorId } = req.params;

        const fornecedor = await Fornecedor.findByPk(fornecedorId);
        if(!fornecedor){
            return res.status(404).json({erro: "Fornecedor não encontrado"});
        }
        const enderecos = await EnderecoFornecedor.findAll({
            where: { fornecedorId },
            include: {
                model: Fornecedor,
                as: "fornecedor"
            }
        });
        return res.json(enderecos);
    } catch{
        return res.status(500).json({erro: "Erro ao listar Endereços"})
    }
} */

async function atualizarDadosEnderecoF(req, res) {
    try{
        const { id } = req.params;
        const dadosAtualizados = req.body;
        
        const enderecos = await EnderecoFornecedor.findByPk(id);

        if(!enderecos){
            return res.status(404).json({erro: "Endereço não encontrado"});
        }
        await enderecos.update(dadosAtualizados);
        return res.json({
            mensagem: "Endereço atualizado com sucesso", enderecos
        });
    } catch{
        return res.status(500).json({erro: "Erro ao atualizar endereço"})
    }
}

async function AtualizarEnderecoF(req, res) {
    try{
        const { id } = req.params;

        const [updated] = await EnderecoFornecedor.update(req.body, {
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

async function RemoverEnderecoF(req, res) {
    try{
        const { id } = req.params;
    const remove = await EnderecoFornecedor.destroy({
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

module.exports = {CriarEnderecoF, ListarEnderecosF, AtualizarEnderecoF, RemoverEnderecoF, atualizarDadosEnderecoF};

