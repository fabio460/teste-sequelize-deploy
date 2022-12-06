'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Prod = sequelize.define('Prod',{
    nome:DataTypes.STRING
  })
  return Prod;
};