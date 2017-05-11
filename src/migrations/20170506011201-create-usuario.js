'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('usuario', {
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contrasena: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_rol: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'rol',
          key: 'id_rol'
        }
      },
      _fecha_creacion: {
        type: Sequelize.DATE,
        allowNull: false
      },
      _fecha_modificacion: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('usuario');
  }
};