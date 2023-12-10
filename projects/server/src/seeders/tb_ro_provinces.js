"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "tb_ro_provinces",
      [
        {
          province_id: 1,
          province_name: "Bali",
        },
        {
          province_id: 2,
          province_name: "Bangka Belitung",
        },
        {
          province_id: 3,
          province_name: "Banten",
        },
        {
          province_id: 4,
          province_name: "Bengkulu",
        },
        {
          province_id: 5,
          province_name: "DI Yogyakarta",
        },
        {
          province_id: 6,
          province_name: "DKI Jakarta",
        },
        {
          province_id: 7,
          province_name: "Gorontalo",
        },
        {
          province_id: 8,
          province_name: "Jambi",
        },
        {
          province_id: 9,
          province_name: "Jawa Barat",
        },
        {
          province_id: 10,
          province_name: "Jawa Tengah",
        },
        {
          province_id: 11,
          province_name: "Jawa Timur",
        },
        {
          province_id: 12,
          province_name: "Kalimantan Barat",
        },
        {
          province_id: 13,
          province_name: "Kalimantan Selatan",
        },
        {
          province_id: 14,
          province_name: "Kalimantan Tengah",
        },
        {
          province_id: 15,
          province_name: "Kalimantan Timur",
        },
        {
          province_id: 16,
          province_name: "Kalimantan Utara",
        },
        {
          province_id: 17,
          province_name: "Kepulauan Riau",
        },
        {
          province_id: 18,
          province_name: "Lampung",
        },
        {
          province_id: 19,
          province_name: "Maluku",
        },
        {
          province_id: 20,
          province_name: "Maluku Utara",
        },
        {
          province_id: 21,
          province_name: "Nanggroe Aceh Darussalam (NAD)",
        },
        {
          province_id: 22,
          province_name: "Nusa Tenggara Barat (NTB)",
        },
        {
          province_id: 23,
          province_name: "Nusa Tenggara Timur (NTT)",
        },
        {
          province_id: 24,
          province_name: "Papua",
        },
        {
          province_id: 25,
          province_name: "Papua Barat",
        },
        {
          province_id: 26,
          province_name: "Riau",
        },
        {
          province_id: 27,
          province_name: "Sulawesi Barat",
        },
        {
          province_id: 28,
          province_name: "Sulawesi Selatan",
        },
        {
          province_id: 29,
          province_name: "Sulawesi Tengah",
        },
        {
          province_id: 30,
          province_name: "Sulawesi Tenggara",
        },
        {
          province_id: 31,
          province_name: "Sulawesi Utara",
        },
        {
          province_id: 32,
          province_name: "Sumatera Barat",
        },
        {
          province_id: 33,
          province_name: "Sumatera Selatan",
        },
        {
          province_id: 34,
          province_name: "Sumatera Utara",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
