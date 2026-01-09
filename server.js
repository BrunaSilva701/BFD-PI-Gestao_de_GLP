//Carregar variáveis de ambiente do .env
require('dotenv').config();
const express = require('express');
const {sequelize} = require('./src/models/index');
const rotasAutenticacao = require('./src/routes/authRoutes');

const app = express();

//Middlewares Globais
app.use(express.json()); //Essencial para receber dados de Registro e Login via JSON

//Rota de Health Check
app.get('/health-check', (req, res) => {
    res.status(200).json({
        success: true,
        message: "API está ativa"
    })
});

//Rotas de usuário e login
app.use('/users', rotasAutenticacao);

//Inicialização do Servidor e Banco de Dados
const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        //Tenta conectar e sincronizar o banco de dados
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        //sync() cria as tabelas se elas não existirem
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log('Não foi possivel conectar ao banco de dados:', error)
    }
}

startServer();