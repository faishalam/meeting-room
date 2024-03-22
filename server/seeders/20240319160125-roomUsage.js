'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const roomUsage = require('../data/roomUsage.json')
    roomUsage.forEach((element) => {
      delete element.id
      element.createdAt = new Date()
      element.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('RoomUsages', roomUsage, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('RoomUsages', null, {});
  }
};
