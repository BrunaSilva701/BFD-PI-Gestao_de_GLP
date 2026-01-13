'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserGas.init({
    botijaoId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    serialIoT: DataTypes.STRING,
    percentualAtual: DataTypes.FLOAT,
    status: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserGas',
  });
  return UserGas;
};