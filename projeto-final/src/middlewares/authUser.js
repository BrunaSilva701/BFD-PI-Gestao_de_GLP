const jwt = require('jsonwebtoken');
const {desencriptarId} = require('../utils/crypto');

module.exports = (req, res, next) => {
    //Procura o token no cabeçalho Authorization: Bearer <token>
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Token não fornecido"
        });
    }

    const partes = authHeader.split(' ');
    if (partes.length !== 2) {
        return res.status(401).json({
            success: false,
            message: "Erro no formato do token"
        });
    }

    const [esquema, token] = partes;
    if (!/^Bearer$/i.test(esquema)) {
        return res.status(401).json({
            success: false,
            message: "Token malformado"
        });
    }

    //Valida o JWT e Desencripta o ID
    try {
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        const idReal = desencriptarId(decodificado.dadosSeguros);

        if (!idReal) {
            throw new Error("Falha na desencriptação")
        }

        req.usuarioId = idReal;
        return next();
    } catch (e) {
        return res.status(401).json({
            success: false,
            message: "Token inválido ou expirado"
        });
    }
}