'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { 
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true, // tem quer ser único
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2), // 9999,99
      }, 
      url_image: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: '',
      },  
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('products');
  }
};