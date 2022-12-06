const { sequelize,DataTypes } = require("../connect");
module.exports = () => {
  const Postagem = sequelize.define("Postagem",{
    body:DataTypes.STRING,
    id_Usuario:DataTypes.INTEGER,
    
  })
  Postagem.associate = function(models) {
    Postagem.belongsTo(models.Usuario, {
      foreignKey: 'id_Usuario',
      onDelete: 'CASCADE'
    })
  };
  return Postagem;
};