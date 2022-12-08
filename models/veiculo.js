const {DataTypes,Sequelize,sequelize} = require('../connect')

  var veiculo =  sequelize.define('Veiculos',{
    nome:{
      type:DataTypes.STRING
    }
  })  

module.exports = veiculo  