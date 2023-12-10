"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class warehouses extends Model {
        static associate({
            users,
            orders,
            orders_details,
            products_stocks,
            stocks_mutations,
            tb_ro_cities,
            products_stocks_histories,
        }) {
            this.hasMany(users, { foreignKey: "warehouses_id" });
            this.hasMany(orders, { foreignKey: "warehouses_id" });
            this.hasMany(orders_details, { foreignKey: "warehouses_id" });
            this.hasMany(products_stocks, { foreignKey: "warehouses_id" });
            this.hasMany(stocks_mutations, {
                foreignKey: "request_warehouses_id",
            });
            this.hasMany(stocks_mutations, {
                foreignKey: "sender_warehouses_id",
            });
            this.hasMany(products_stocks_histories, {
                foreignKey: "warehouses_id",
            });
            this.belongsTo(tb_ro_cities, { foreignKey: "cities_id" });
        }
    }
    warehouses.init(
        {
            name: DataTypes.STRING,
            lng: DataTypes.STRING,
            lat: DataTypes.STRING,
            status: DataTypes.ENUM("Active", "Inactive"),
            createdAt : {
                type: DataTypes.DATE,
                defaultValue: new Date()
              },
              updatedAt : {
                type: DataTypes.DATE,
                defaultValue: new Date()
              }
        },
        {
            sequelize,
            modelName: "warehouses",
            paranoid : true
        },
    );
    return warehouses;
};
