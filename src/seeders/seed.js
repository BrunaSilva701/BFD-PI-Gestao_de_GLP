require('dotenv').config({ path: './.env' });
const { Usuario, sequelize } = require('../models/index');
const bcrypt = require('bcrypt');

async function criarUsuario() {
  try {
    // Sincroniza o banco (cria as tabelas se não existirem)
    await sequelize.sync({ force: false });

    const senhaHash = await bcrypt.hash('123456', 10);

    const [usuario, created] = await Usuario.findOrCreate({
      where: { email: 'teste@email.com' },
      defaults: {
        name: 'Usuário Teste',
        email: 'teste@email.com',
        password: senhaHash
      }
    });

    if (created) {
      console.log('✅ Usuário de teste criado com sucesso!');
    } else {
      console.log('ℹ️ Usuário já existe no banco.');
    }
  } catch (error) {
    console.error('❌ Erro ao criar usuário:', error);
  } finally {
    await sequelize.close();
  }
}

criarUsuario();