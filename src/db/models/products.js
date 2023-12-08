'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo(models.users, {
        foreignKey: 'user_id',
      });
    }
  }
  products.init(
    {
      user_id: DataTypes.STRING,
      product_name: DataTypes.STRING,
      specs: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'products',
    }
  );
  return products;
};
