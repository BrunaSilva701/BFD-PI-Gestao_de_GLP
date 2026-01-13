'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Botijaos', 'pesoVazio', {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 13.5
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Botijaos', 'pesoVazio');
  }
};
