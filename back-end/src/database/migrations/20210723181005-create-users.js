'use strict';

// doc:
// https://dev.mysql.com/doc/refman/8.0/en/precision-math-decimal-characteristics.html
// A sintaxe da declaração de uma DECIMALcoluna é . Os intervalos de valores para os argumentos são os seguintes: DECIMAL(M,D)
// M é o número máximo de dígitos (a precisão). Tem um intervalo de 1 a 65.
// D é o número de dígitos à direita da vírgula decimal (a escala). Ele tem um intervalo de 0 a 30 e não deve ser maior que M.
// Se D for omitido, o padrão será 0. Se M for omitido, o padrão será 10.

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true,
      }, 
      password: {
        allowNull: false,
        type: Sequelize.STRING(32),
      },  
      role: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
