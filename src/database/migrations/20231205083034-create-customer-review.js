"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("customer_reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      booking_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "bookings", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      rating: {
        type: Sequelize.INTEGER,
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
      comment: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("customer_reviews");
  },
};
