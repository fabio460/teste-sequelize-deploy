require('dotenv').config()
module.exports =  Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.USER_DB,process.env.BANC_DB,process.env.PASSWORD_DB,{
  host:process.env.HOST_DB,
  dialect:'mysql',
  dialectModule: require('mysql2')
});
module.exports = ( DataTypes) => {
  const Prod = sequelize.define('Prod',{
    nome:{type:Sequelize.STRING}
  })
  return Prod;
};