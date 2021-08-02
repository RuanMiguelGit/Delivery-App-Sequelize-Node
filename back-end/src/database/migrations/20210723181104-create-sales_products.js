'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        references: { model: 'sales', key: 'id'},
        primaryKey: true,
        field:'sale_id'
      },
      productId: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id'},
        primaryKey: true,
        field:'product_id'
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue:0
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};
