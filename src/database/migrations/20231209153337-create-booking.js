"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "products", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      photographerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      note: {
        type: Sequelize.TEXT,
      },
      location: {
        type: Sequelize.STRING,
      },
      startAt: {
        type: Sequelize.TIME,
      },
      endAt: {
        type: Sequelize.TIME,
      },
      prepaidStatus: {
        type: Sequelize.INTEGER,
      },
      confirmStatus: {
        type: Sequelize.INTEGER,
      },
      fullpaidStatus: {
        type: Sequelize.INTEGER,
      },
      completeStatus: {
        type: Sequelize.INTEGER,
      },
      filepath: {
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
    await queryInterface.dropTable("bookings");
  },
};
