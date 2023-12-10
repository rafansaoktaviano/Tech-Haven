"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "provinces",
      [
          {
            id: 1,
            province: "Bali",
          },
          {
            id: 2,
            province: "Bangka Belitung",
          },
          {
            id: 3,
            province: "Banten",
          },
          {
            id: 4,
            province: "Bengkulu",
          },
          {
            id: 5,
            province: "DI Yogyakarta",
          },
          {
            id: 6,
            province: "DKI Jakarta",
          },
          {
            id: 7,
            province: "Gorontalo",
          },
          {
            id: 8,
            province: "Jambi",
          },
          {
            id: 9,
            province: "Jawa Barat",
          },
          {
            id: 10,
            province: "Jawa Tengah",
          },
          {
            id: 11,
            province: "Jawa Timur",
          },
          {
            id: 12,
            province: "Kalimantan Barat",
          },
          {
            id: 13,
            province: "Kalimantan Selatan",
          },
          {
            id: 14,
            province: "Kalimantan Tengah",
          },
          {
            id: 15,
            province: "Kalimantan Timur",
          },
          {
            id: 16,
            province: "Kalimantan Utara",
          },
          {
            id: 17,
            province: "Kepulauan Riau",
          },
          {
            id: 18,
            province: "Lampung",
          },
          {
            id: 19,
            province: "Maluku",
          },
          {
            id: 20,
            province: "Maluku Utara",
          },
          {
            id: 21,
            province: "Nanggroe Aceh Darussalam (NAD)",
          },
          {
            id: 22,
            province: "Nusa Tenggara Barat (NTB)",
          },
          {
            id: 23,
            province: "Nusa Tenggara Timur (NTT)",
          },
          {
            id: 24,
            province: "Papua",
          },
          {
            id: 25,
            province: "Papua Barat",
          },
          {
            id: 26,
            province: "Riau",
          },
          {
            id: 27,
            province: "Sulawesi Barat",
          },
          {
            id: 28,
            province: "Sulawesi Selatan",
          },
          {
            id: 29,
            province: "Sulawesi Tengah",
          },
          {
            id: 30,
            province: "Sulawesi Tenggara",
          },
          {
            id: 31,
            province: "Sulawesi Utara",
          },
          {
            id: 32,
            province: "Sumatera Barat",
          },
          {
            id: 33,
            province: "Sumatera Selatan",
          },
          {
            id: 34,
            province: "Sumatera Utara",
          },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("provinces", null, {});
  },
};
