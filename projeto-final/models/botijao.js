'use strict';
const {
  Model
} = require('sequelize');
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
    gasId: DataTypes.INTEGER,
    pesoVazio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Botijao',
  });
  return Botijao;
};