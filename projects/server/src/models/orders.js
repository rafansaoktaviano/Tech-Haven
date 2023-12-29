"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class orders extends Model {
        static associate({ users, payment_methods, couriers, warehouses, tb_ro_cities }) {
            this.belongsTo(users, { foreignKey: "users_id" });
            this.belongsTo(payment_methods, {
                foreignKey: "payment_methods_id",
            });

            this.belongsTo(warehouses, { foreignKey: "warehouses_id" });
            this.belongsTo(tb_ro_cities, {foreignKey: "customer_cities_id"})
        }
    }
    orders.init(
        {
            total_price: DataTypes.DECIMAL,
            transaction_uid: DataTypes.STRING,
            bank_account_number: DataTypes.STRING,
            delivery_fee: DataTypes.DECIMAL,
            shipping_type: DataTypes.STRING,
            total_weight: DataTypes.DECIMAL,
            payment_proof: DataTypes.STRING,
            address_detail: DataTypes.STRING,
            courier: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "orders",
        }
    );
    return orders;
};
