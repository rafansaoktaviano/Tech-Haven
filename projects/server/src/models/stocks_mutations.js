"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class stocks_mutations extends Model {
        static associate({ users, products, warehouses }) {
            this.belongsTo(users, { foreignKey: "users_id" });
            this.belongsTo(products, { foreignKey: "products_id" });
            this.belongsTo(warehouses, { foreignKey: "request_warehouses_id" });
            this.belongsTo(warehouses, { foreignKey: "sender_warehouses_id" });
        }
    }
    stocks_mutations.init(
        {
            quantity: DataTypes.INTEGER,
            status: DataTypes.ENUM("Approved", "Pending", "Declined"),
        },
        {
            sequelize,
            modelName: "stocks_mutations",
        }
    );
    return stocks_mutations;
};
