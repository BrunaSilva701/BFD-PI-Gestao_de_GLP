'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alerta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alerta.init({
    tipo: DataTypes.STRING,
    mensagem: DataTypes.TEXT,
    nivel: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    botijaoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Alerta',
  });
  return Alerta;
};