'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Gas.belongsToMany(models.Cliente, { foreignKey: 'clienteId', as : 'cliente'});
      Gas.belongsToMany(models.EnderecoCliente, { foreignKey: 'addressId', as : 'enderecoCliente' });
    }
  }
  Gas.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    preco: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Gas',
  });
  return Gas;
};