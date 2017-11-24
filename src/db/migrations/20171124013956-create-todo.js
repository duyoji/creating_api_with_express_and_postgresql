'use strict';

const sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Todos');
  }
};