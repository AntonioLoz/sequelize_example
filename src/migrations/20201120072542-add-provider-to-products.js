'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'products', 
      'providerId',
      {
        type:Sequelize.INTEGER,
        references:{
          model:'providers',
          key:'id',

        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
      }
    );
    
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'products',
      'providerId'
    );
    
  }
};
