"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        static associate({
            users_addresses,
            reset_password_tokens,
            verification_tokens,
            carts,
            stocks_mutations,
            orders,
            orders_details,
            warehouses,
        }) {
            this.hasMany(users_addresses, { foreignKey: "users_id" });
            this.hasMany(reset_password_tokens, { foreignKey: "users_id" });
            this.hasMany(verification_tokens, { foreignKey: "users_id" });
            this.hasMany(carts, { foreignKey: "users_id" });
            this.hasMany(stocks_mutations, { foreignKey: "users_id" });
            this.hasMany(orders, { foreignKey: "users_id" });
            this.hasMany(orders_details, { foreignKey: "users_id" });
            this.belongsTo(warehouses, { foreignKey: "warehouses_id" });
        }
    }
    users.init(
        {
            fullname: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar: DataTypes.STRING,
            status: DataTypes.ENUM("Active", "Inactive"),
            role: DataTypes.ENUM("Owner", "Warehouse Admin", "Customer"),
            is_verified: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "users",
            paranoid : true
        }
    );
    return users;
};
