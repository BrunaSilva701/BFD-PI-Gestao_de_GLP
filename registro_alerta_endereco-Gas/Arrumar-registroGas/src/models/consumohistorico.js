'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConsumoHistorico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConsumoHistorico.init({
    quantidade: DataTypes.FLOAT,
    dataLeitura: DataTypes.DATE,
    botijaoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ConsumoHistorico',
  });
  return ConsumoHistorico;
};