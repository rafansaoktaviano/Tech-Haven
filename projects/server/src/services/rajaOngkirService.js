const db = require("../models");
const axios = require("axios");


require("dotenv").config();

// const key = "444bbf4c27b3522ec578ebc1b1f75e95";
// const requestUrl = "https://api.rajaongkir.com/starter/cost";
const key = process.env.RAJAONGKIRKEY;
const requestUrl = process.env.RAJAONGKIR;

module.exports = {
  getShippingMethod: async (datas) => {
    console.log(key);
console.log(requestUrl);
    try {
      console.log(datas);
      const config = {
        headers: {
          key: key,
        },
      };

      const payload = {
        origin: datas.userCity,
        destination: datas.nearestWarehouse,
        weight: datas.weight,
        courier: datas.courier,
      };

      const getShippingMethod = await axios.post(requestUrl, payload, config);
      return getShippingMethod.data;
    } catch (error) {
      return error;
    }
  },

  getAllCities: async ({ provinces_id }) => {
    try {
      // console.log(provinces_id);
      where = {};
      if (provinces_id) where.provinces_id = provinces_id;
      const getRajaOngkir = await db.tb_ro_cities.findAll({ where });
      return getRajaOngkir;
    } catch (error) {
      return error;
    }
  },

  getAllPropinsi: async () => {
    try {
      const getRajaOngkir = await db.tb_ro_provinces.findAll();
      return getRajaOngkir;
    } catch (error) {
      return error;
    }
  },
};
