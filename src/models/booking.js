"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: "customerId",
      });
      Booking.belongsTo(models.User, {
        foreignKey: "photographerId",
      });
      Booking.belongsTo(models.Product, {
        foreignKey: "productId",
      });
      Booking.hasOne(models.CustomerReview, {
        foreignKey: "bookingId",
      });
    }
  }
  Booking.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      photographerId: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      location: DataTypes.STRING,
      startAt: DataTypes.TIME,
      endAt: DataTypes.TIME,
      prepaidStatus: DataTypes.INTEGER,
      confirmStatus: DataTypes.INTEGER,
      fullpaidStatus: DataTypes.INTEGER,
      completeStatus: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      filepath: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
