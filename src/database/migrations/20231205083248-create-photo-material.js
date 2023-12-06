"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("photo_materials", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      printing_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "photo_printings", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      material_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "materials", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      photo_filename: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("photo_materials");
  },
};
