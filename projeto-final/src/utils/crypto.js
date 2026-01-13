const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const chave = Buffer.from(process.env.ENCRYPTION_KEY, 'utf8').slice(0, 32);

//Função para encriptar
exports.encriptarId = (texto) => {
    const iv = crypto.randomBytes(16); //IV aleatório para cada encriptação
    const cifrador = crypto.createCipheriv(algorithm, chave, iv);
    let encriptado = cifrador.update(texto.toString(), 'utf8', 'hex');
    encriptado += cifrador.final('hex');
    return { iv: iv.toString('hex'), conteudo: encriptado };
};

//Função para desencriptar
exports.desencriptarId = (dadosSeguros) => {
    try {
        const iv = Buffer.from(dadosSeguros.iv, 'hex');
        const decifrador = crypto.createDecipheriv(algorithm, chave, iv);
        let decriptado = decifrador.update(dadosSeguros.conteudo, 'hex', 'utf8');
        decriptado += decifrador.final('utf8');
        return decriptado;
    } catch (e) {
        return null;
    }
};