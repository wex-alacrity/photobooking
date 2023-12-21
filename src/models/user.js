"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Type, {
        foreignKey: "typeId",
      });
      User.hasMany(models.Booking, {
        foreignKey: "customerId",
      });
      User.hasMany(models.Booking, {
        foreignKey: "photographerId",
      });
      User.hasMany(models.CustomerReview, {
        foreignKey: "customerId",
      });
      User.hasMany(models.CustomerReview, {
        foreignKey: "photographerId",
      });
      User.belongsToMany(models.Product, {
        through: "Product_Photographer",
        foreignKey: "photographerId",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
      rating: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
