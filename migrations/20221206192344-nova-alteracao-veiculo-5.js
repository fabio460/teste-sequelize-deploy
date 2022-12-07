
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Veiculo', 'id_motorista', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
      
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Veiculo', 'id_motorista', { transaction: t }),
   
      ]);
    });
  }
};
