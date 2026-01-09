const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Admin = sequelize.define(
  'Admin',
  {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  },
  {
    tableName: 'admins',
    timestamps: false
  }
);

module.exports = Admin;



