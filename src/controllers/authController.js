const {Usuario} = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { encriptarId } = require('../utils/crypto');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Login (POST /users/login)
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario || !(await bcrypt.compare(senha, usuario.password))) {
            return res.status(401).json({
                success: false,
                status: 401,
                message: "Credenciais inválidas"
            });
        }
        
        // Criptografando o ID dentro do payload do Token
        const dadosSeguros = encriptarId(usuario.id);
        const token = jwt.sign({dadosSeguros}, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            status: 200,
            message: "Login realizado com sucesso",
            data: {
                id: usuario.id,
                email: usuario.email,
                nome: usuario.name,
                token: token
            }
        });
    } catch (e) {
        res.status(500).json({success: false, message: "Erro no servidor"});
    }
};

// Alterar senha (POST /users/change-password)
exports.alterarSenha = async (req, res) => {
    try {
        const { senhaAtual, novaSenha } = req.body;
        const idUsuario = req.usuarioId; // Definido pelo middleware auth.js

        const usuario = await Usuario.findByPk(idUsuario);
        
        if (!usuario || !(await bcrypt.compare(senhaAtual, usuario.password))) {
            return res.status(400).json({ success: false, message: "Senha atual incorreta" });
        } 

        usuario.password = await bcrypt.hash(novaSenha, 10);
        await usuario.save();

        res.status(200).json({
            success: true,
            status: 200,
            message: "A senha foi atualizada com sucesso"
        });
    } catch (e) {
        res.status(500).json({success: false, message: "Erro ao atualizar a senha"});
    }
};

// Solicitar recuperação (Gera o link)
exports.esqueciSenha = async (req, res) => {
    try {
        const{email} = req.body;
        const usuario = await Usuario.findOne({where: {email}});

        if (!usuario) {
            return res.status(404).json({success: false, message: "Email não encontrado"});
        }

        // Token de 15 minutos apenas para recuperação
        const tokenReset = jwt.sign({id: usuario.id}, process.env.JWT_SECRET, {expiresIn: '15m'});

        const link = `http://localhost:3000/users/reset-password?token=${tokenReset}`;

        await transporter.sendMail({
            from: '"Suporte" <noreply@projeto.com>',
            to: usuario.email,
            subject: "Recuperação de Senha",
            html: `<p>Você solicitou a troca de senha. Use o link abaixo (expira em 15 min):</p>
                   <a href="${link}">${link}</a>`
        });

        res.status(200).json({success: true, message: "Email de recuperação enviado!"});
    } catch (e) {
        res.status(500).json({success: false, message: "Erro ao enviar email"});
    }
};

// Resetar a senha de fato
exports.resetarSenha = async (req, res) => {
    try {
        const {token, novaSenha} = req.body;

        // Verifica se p token é válido
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);

        const usuario = await Usuario.findByPk(decodificado.id);
        if (!usuario) return res.status(400).json({message: "Usuário inválido"});

        // Salva nova sennha
        usuario.password = await bcrypt.hash(novaSenha, 10);
        await usuario.save();

        res.status(200).json({success: true, message: "Senha atualizada com sucesso!"});
    } catch (e) {
        res.status(400).json({success: false, message: "Token inválido ou expirado"});
    }
};

// Alterar email
exports.alterarEmail = async (req, res) => {
    try {
        const {senhaAtual, novoEmail} = req.body;
        const idUsuario = req.usuarioId; // Vem do middleware

        // Busca o usuário no banco
        const usuario = await Usuario.findByPk(idUsuario);

        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }

        // Verifica se a senha atual está correta
        const senhaValida = await bcrypt.compare(senhaAtual, usuario.password);
        if(!senhaValida) {
            return res.status(401).json({
                success: false,
                message: "Senha atual incorreta"
            });
        }

        // Verifica se o novo email já existe no banco
        const emailExiste = await Usuario.findOne({where: {email: novoEmail}});

        // Se achou um email igual E ele não pertence a este usuário, bloqueia.
        if (emailExiste && emailExiste.id !== idUsuario) {
            return res.status(400).json({
                success: false,
                message: "Este email já está em uso"
            });
        }

        // Salva o nome email
        usuario.email = novoEmail;
        await usuario.save();

        res.status(200).json({
            success: true,
            message: "Email atualizado com sucesso!",
            data: {
                id: usuario.id,
                email: usuario.email // Retorna o email novo para confirmação
            }
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: "Erro ao atualizar email"
        });
    }
};