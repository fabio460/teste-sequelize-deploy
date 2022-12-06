'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Veiculos','id_motorista',{
      type: DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Veiculos','id_motorista',{
      type: DataTypes.STRING
    })
  }
};
