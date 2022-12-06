'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class motorista extends Model {
    static associate(models) {
      motorista.hasMany(models.Veiculo,{
        foreignKey:'id_motorista',
        onDelete:'CASCADE'
      })
    }
  }
  motorista.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'motorista',
  });
  return motorista;
};