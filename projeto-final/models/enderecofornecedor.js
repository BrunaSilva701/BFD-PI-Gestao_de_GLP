'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnderecoFornecedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnderecoFornecedor.init({
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    estado: DataTypes.STRING,
    fornecedorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EnderecoFornecedor',
  });
  return EnderecoFornecedor;
};