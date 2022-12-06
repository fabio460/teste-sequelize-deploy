const { sequelize,DataTypes } = require("../connect");
module.exports = () => {
  const Usuario = sequelize.define("Usuario",{
    nome:DataTypes.STRING,
    idade:DataTypes.INTEGER
  })
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Postagem, {
      foreignKey: 'id_Usuario',
    })
  };
  return Usuario;
};