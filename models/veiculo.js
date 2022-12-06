'use strict';
const {
  Model
} = require('sequelize');
const {Usuario} = require('../models')
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    static associate(models) {
      Veiculo.belongsTo(models.motorista,{
        foreignKey:'id_motorista',  
      })
    }
  }
  Veiculo.init({
    nome: DataTypes.STRING,
    id_motorista:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculo',
  });

 
  return Veiculo;
};