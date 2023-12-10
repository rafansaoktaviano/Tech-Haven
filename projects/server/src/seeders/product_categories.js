"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products_categories",
      [
        {
          id: 1,
          category: "SmartPhone",
        },
        {
          id: 2,
          category: "Laptop",
        },
        {
          id: 3,
          category: "HeadPhone",
        },
        {
          id: 4,
          category: "Accessories",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products_categories", null, {});
  },
};
