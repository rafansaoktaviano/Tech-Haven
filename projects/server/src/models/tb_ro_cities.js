"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_ro_cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ tb_ro_provinces, warehouses, users_addresses, orders }) {
      // define association here
      this.belongsTo(tb_ro_provinces, { foreignKey: "provinces_id" });
      this.hasMany(users_addresses, { foreignKey: "cities_id" });
      this.hasMany(warehouses, { foreignKey: "cities_id" });
      this.hasMany(orders, { foreignKey: "customer_cities_id" });
    }
  }
  tb_ro_cities.init(
    {
      city_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      city_name: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "tb_ro_cities",
    }
  );
  return tb_ro_cities;
};
