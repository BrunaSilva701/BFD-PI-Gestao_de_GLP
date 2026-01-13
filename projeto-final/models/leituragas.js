'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeituraGas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // LeituraGas.init({
  //   valor: DataTypes.FLOAT,
  //   dataLeitura: DataTypes.DATE,
  //   botijaoId: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'LeituraGas',
  // });
  // return LeituraGas;

  // Adicionado a coluna de peso
  LeituraGas.init({
  valor: DataTypes.FLOAT,
  peso: DataTypes.FLOAT,
  dataLeitura: DataTypes.DATE,
  botijaoId: DataTypes.INTEGER
  }, {
  sequelize,
  modelName: 'LeituraGas',
  });
};