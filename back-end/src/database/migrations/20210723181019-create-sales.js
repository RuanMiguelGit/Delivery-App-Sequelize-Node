'use strict';

// doc:
// https://dev.mysql.com/doc/refman/8.0/en/precision-math-decimal-characteristics.html
// A sintaxe da declaração de uma DECIMALcoluna é . Os intervalos de valores para os argumentos são os seguintes: DECIMAL(M,D)
// M é o número máximo de dígitos (a precisão). Tem um intervalo de 1 a 65.
// D é o número de dígitos à direita da vírgula decimal (a escala). Ele tem um intervalo de 0 a 30 e não deve ser maior que M.
// Se D for omitido, o padrão será 0. Se M for omitido, o padrão será 10.

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      }, 
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
      },  
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },      
      status: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};