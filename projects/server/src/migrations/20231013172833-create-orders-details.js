"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("orders_details", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            product_price: {
                type: Sequelize.DECIMAL,
            },
            transaction_uid: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.ENUM(
                    "Payment Pending",
                    "Waiting for Payment Approval",
                    "Order Proccess",
                    "Package Sent",
                    "Package Arrived",
                    "Order Completed",
                    "Order Canceled"
                ),
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
        await queryInterface.dropTable("orders_details");
    },
};
