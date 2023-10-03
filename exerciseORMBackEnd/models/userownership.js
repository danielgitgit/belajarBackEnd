'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userOwnership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userOwnership.init({
    firstName: DataTypes.STRING,
    carType: DataTypes.STRING,
    carBrand: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userOwnership',
  });
  return userOwnership;
};