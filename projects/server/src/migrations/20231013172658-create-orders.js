'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.DECIMAL
      },
      transaction_uid: {
        type: Sequelize.STRING
      },
      bank_account_number: {
        type: Sequelize.STRING
      },
      delivery_fee: {
        type: Sequelize.DECIMAL
      },
      shipping_type: {
        type: Sequelize.STRING
      },
      total_weight: {
        type: Sequelize.DECIMAL
      },
      payment_proof: {
        type: Sequelize.STRING
      },
      address_detail: {
        type: Sequelize.STRING
      },
      courier: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};