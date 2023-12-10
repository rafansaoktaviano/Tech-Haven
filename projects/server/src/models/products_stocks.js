"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class products_stocks extends Model {
        static associate({ products, warehouses }) {
            this.belongsTo(products, { foreignKey: "products_id" });
            this.belongsTo(warehouses, { foreignKey: "warehouses_id" });
        }
    }
    products_stocks.init(
        {
            stock: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "products_stocks",
        }
    );
    return products_stocks;
};
