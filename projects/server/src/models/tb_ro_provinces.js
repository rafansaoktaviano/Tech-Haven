"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_ro_provinces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ tb_ro_cities, users_addresses }) {
      // define association here
      this.hasMany(tb_ro_cities, { foreignKey: "provinces_id" });
      // this.hasMany(users_addresses, { foreignKey: "provinces_id" });
    }
  }
  tb_ro_provinces.init(
    {
      province_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      province_name: DataTypes.STRING,
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
      modelName: "tb_ro_provinces",
    }
  );
  return tb_ro_provinces;
};
