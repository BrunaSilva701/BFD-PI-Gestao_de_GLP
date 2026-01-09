'use strict';
const { hashPassword } = require('../src/utils/hash');

module.exports = {
  up: async (queryInterface) => {
    const senhaHash = await hashPassword('123456');

    await queryInterface.bulkInsert('admins', [{
      nome: 'Admin Teste',
      email: 'admin@teste.com',
      senha: senhaHash,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('admins', null, {});
  }
};



