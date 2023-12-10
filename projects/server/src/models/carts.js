"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    static associate({ users, products }) {
      this.belongsTo(users, { foreignKey: "users_id" });
      this.belongsTo(products, { foreignKey: "products_id" });
    }
  }
  carts.init(
    {
      quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    },
    {
      sequelize,
      modelName: "carts",
    }
  );
  return carts;
};
