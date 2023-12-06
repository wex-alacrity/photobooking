'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photo_material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  photo_material.init({
    printing_id: DataTypes.INTEGER,
    material_id: DataTypes.INTEGER,
    photo_filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'photo_material',
  });
  return photo_material;
};