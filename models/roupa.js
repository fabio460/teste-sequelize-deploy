const {Sequelize,sequelize} = require('../connect')

module.exports = ()=>{
  const roupa = sequelize.define('roupa',{
    nome:{type:Sequelize.STRING}
  })
  
  return roupa
}