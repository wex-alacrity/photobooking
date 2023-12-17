"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomerReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CustomerReview.belongsTo(models.User, {
        foreignKey: "photographerId",
      });
      CustomerReview.belongsTo(models.User, {
        foreignKey: "customerId",
      });
      CustomerReview.belongsTo(models.Booking, {
        foreignKey: "bookingId",
      });
    }
  }
  CustomerReview.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bookingId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      photographerId: DataTypes.INTEGER,
      rating: DataTypes.FLOAT,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "CustomerReview",
    }
  );
  return CustomerReview;
};
