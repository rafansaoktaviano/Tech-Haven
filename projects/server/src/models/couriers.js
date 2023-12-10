"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class couriers extends Model {
        static associate({ orders }) {
            // this.hasMany(orders, { foreignKey: "couriers_id" });
        }
    }
    couriers.init(
        {
            courier: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "couriers",
        }
    );
    return couriers;
};
