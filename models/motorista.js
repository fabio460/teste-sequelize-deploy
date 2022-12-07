const {DataTypes,Sequelize,sequelize} = require('../connect')
const Veiculo = require('./veiculo')
  var motorista =  sequelize.define('motorista',{
    nome:{
      type:Sequelize.STRING
    }
  })  
  // motorista.hasMany(Veiculo,{
  //   foreignKey:'id_motorista',
  //   onDelete:'CASCADE'
  // })
  
module.exports = motorista



