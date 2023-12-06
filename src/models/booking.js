'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    product_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    photographer_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    note: DataTypes.TEXT,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    prepaid_status: DataTypes.BOOLEAN,
    confirm_status: DataTypes.BOOLEAN,
    fullpaid_status: DataTypes.BOOLEAN,
    complete_status: DataTypes.BOOLEAN,
    filepath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};