"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Wedding",
        price: 3000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Portrait",
        price: 2000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Architecture",
        price: 7000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Landscape",
        price: 6000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
