const {DataTypes,Sequelize,sequelize} = require('../connect')

module.exports = 
 sequelize.define('motorista',{
    nome:{
      type:Sequelize.STRING
    }
  })  
  // motorista.hasMany(models.Veiculo,{
  //   foreignKey:'id_motorista',
  //   onDelete:'CASCADE'
  // })



