"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class products_stocks_histories extends Model {
        static associate({ products, warehouses }) {
            this.belongsTo(products, { foreignKey: "products_id" });
            this.belongsTo(warehouses, { foreignKey: "warehouses_id" });
        }
    }
    products_stocks_histories.init(
        {
            status: DataTypes.ENUM("Bertambah", "Berkurang"),
            quantity: DataTypes.INTEGER,
            reference: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "products_stocks_histories",
        }
    );
    return products_stocks_histories;
};
