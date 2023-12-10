"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            product_name: {
                type: Sequelize.STRING,
            },
            product_description: {
                type: Sequelize.TEXT("long"),
            },
            product_price: {
                type: Sequelize.DECIMAL,
            },
            product_weight: {
                type: Sequelize.DECIMAL,
            },
            product_status: {
                type: Sequelize.ENUM("Active", "Inactive"),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("products");
    },
};
