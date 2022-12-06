const {sequelize,Sequelize} = require("../connect");

module.exports = ( DataTypes) => {
  const Prod = sequelize.define('Prod',{
    nome:{type:Sequelize.STRING}
  })
  
  return Prod;
};