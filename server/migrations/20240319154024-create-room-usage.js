'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomUsages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id'
        }
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rooms',
          key: 'id'
        }
      },
      startTime: {
        type: Sequelize.STRING(150)
      },
      endTime: {
        type: Sequelize.STRING(150)
      },
      bookingDate: {
        type: Sequelize.DATE
      },
      quotaUsed: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RoomUsages');
  }
};