'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('veiculos', 'id_motorista', {
          type: Sequelize.DataTypes.STRING,
          onDelete:'CASCADE'
        }, { transaction: t }),
      
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('veiculos', 'id_motorista', { transaction: t }),
   
      ]);
    });
  }
};
