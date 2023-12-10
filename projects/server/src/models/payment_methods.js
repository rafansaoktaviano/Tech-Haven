"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class payment_methods extends Model {
        static associate({ orders }) {
            this.hasMany(orders, { foreignKey: "payment_methods_id" });
        }
    }
    payment_methods.init(
        {
            method: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "payment_methods",
        }
    );
    return payment_methods;
};
