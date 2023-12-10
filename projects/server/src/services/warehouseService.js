// const { where } = require("sequelize");
const db = require("../models");
const { sequelize } = require("../models");

module.exports = {
  addWarehouse: async (data) => {
    try {
      // console.log(data);
      const hasil = await db.warehouses.create(data);
      // console.log(hasil);
      return hasil;
    } catch (error) {
      return error;
    }
  },
  deleteWarehouse: async ({ id }) => {
    try {
      const update = await db.warehouses.update(
        { status: "Inactive" },
        { where: { id } }
      );
      const res = await db.warehouses.destroy({ where: { id } });
      return res;
    } catch (error) {
      return error;
    }
  },
  restoreWarehouse: async ({ id }) => {
    try {
      const res = await db.warehouses.restore({ where: { id } });
      const update = await db.warehouses.update(
        { status: "Active" },
        { where: { id } }
      );
      return res;
    } catch (error) {
      return error;
    }
  },
  getAllWarehouse: async () => {
    try {
      const res = await db.warehouses.findAll({
        attributes: ["name", "id",[sequelize.col("city_name"), "city"]],
        include: [
          {
            model: db.tb_ro_cities,
            attributes: [],
          },
        ],
      });
      return res;
    } catch (error) {
      return error;
    }
  },
  updateWarehouse: async ({ id, name, cities_id, lng, lat  }) => {
    try {
      const data = await db.warehouses.findByPk(id);
      const newData = await db.warehouses.update(
        { ...data, name, cities_id, lng, lat },
        { where: { id } }
      );
      return newData;
    } catch (error) {
      return error;
    }
  },
  getById : async ({id}) => {
    try {
      const hasil = await db.warehouses.findByPk(id)
      return hasil
    } catch (error) {
      next(error)
    }
  }
};
