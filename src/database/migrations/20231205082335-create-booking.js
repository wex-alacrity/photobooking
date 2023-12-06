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
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "products", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "customers", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      photographer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "photographers", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      note: {
        type: Sequelize.TEXT,
      },
      startTime: {
        type: Sequelize.DATE,
      },
      endTime: {
        type: Sequelize.DATE,
      },
      prepaid_status: {
        type: Sequelize.BOOLEAN,
      },
      confirm_status: {
        type: Sequelize.BOOLEAN,
      },
      fullpaid_status: {
        type: Sequelize.BOOLEAN,
      },
      complete_status: {
        type: Sequelize.BOOLEAN,
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
