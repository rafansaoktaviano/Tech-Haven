"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class products extends Model {
        static associate({
            products_categories,
            products_images,
            carts,
            stocks_mutations,
            products_stocks,
            orders_details,
            products_stocks_histories,
        }) {
            this.belongsTo(products_categories, {
                foreignKey: "products_categories_id",
            });
            this.hasMany(products_images, { foreignKey: "products_id" });
            this.hasMany(carts, { foreignKey: "products_id" });
            this.hasMany(stocks_mutations, { foreignKey: "products_id" });
            this.hasMany(products_stocks, { foreignKey: "products_id" });
            this.hasMany(orders_details, { foreignKey: "products_id" });
            this.hasMany(products_stocks_histories, {
                foreignKey: "products_id",
            });
        }
    }
    products.init(
        {
            product_name: DataTypes.STRING,
            product_description: DataTypes.TEXT('long'),
            product_price: DataTypes.DECIMAL,
            product_weight: DataTypes.DECIMAL,
            product_status: DataTypes.ENUM('Active','Inactive'),
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
            modelName: "products",
            paranoid : true
        }
    );
    return products;
};
