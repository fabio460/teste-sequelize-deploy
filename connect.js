require('dotenv').config()
const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize('banco-teste', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});



module.exports = {sequelize,Sequelize,DataTypes}