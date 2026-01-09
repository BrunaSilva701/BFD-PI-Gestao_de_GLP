'use strict';
const {
  Model
} = require('sequelize');

// RETIRAR ESSA SEÇÃO
module.exports = (sequelize, DataTypes) => {
  class Botijao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Botijao.init({
    codigo: DataTypes.STRING,
    capacidade: DataTypes.FLOAT,
    nivelAtual: DataTypes.FLOAT,
    status: DataTypes.STRING,
    gasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Botijao',
  });
  return Botijao;
};

/// ATUALIZAÇÃO COM O ESP32
// module.exports = (sequelize, DataTypes) => {
//   const Botijao = sequelize.define('Botijao', {
//     codigo: DataTypes.STRING,
//     capacidade: DataTypes.FLOAT,   // kg de gás
//     pesoVazio: DataTypes.FLOAT     // tara do botijão
//   }, {
//     tableName: 'botijoes'
//   });

//   Botijao.associate = models => {
//     Botijao.hasMany(models.UserGas, { foreignKey: 'botijaoId' });
//   };

//   return Botijao;
// };
