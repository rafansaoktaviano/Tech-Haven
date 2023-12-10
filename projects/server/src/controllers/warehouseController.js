const opencageService = require("../services/opencageService");
const warehouseService = require("../services/warehouseService");
const db = require("../models");
const stockServices = require("../services/stockServices");

module.exports = {
  addWarehouse: async (req, res, next) => {
    try {
      const { name, cities_id } = req.body;
      const cekNama = await db.warehouses.findOne({ where: { name } });
      if (cekNama) {
        throw res.status(400).send({
          isError: "true",
          message: "Nama gudang sudah tersedia",
        });
      }
      if (name === "" || cities_id === "") {
        throw res.status(400).send({
          isError: "true",
          message: "Data tidak Boleh Kosong",
        });
      }
      const loc = await opencageService.getLatLong(cities_id);
      const data = {
        name: req.body.name,
        cities_id: req.body.cities_id,
        lng: loc.lng,
        lat: loc.lat,
      };
      const add = await warehouseService.addWarehouse(data);
      res.status(200).send({
        isError: "false",
        message: "Success Add Warehouse",
      });
    } catch (error) {
      next(error);
    }
  },
  deleteWarehouse: async (req, res, next) => {
    try {
      const cekWarehouse = await db.warehouses.findByPk(req.params.id);
      if (!cekWarehouse) {
        throw res.status(409).send({
          isError: true,
          message: "Warehouses Tidak Ditemukan",
          data: null,
        });
      }
      await warehouseService.deleteWarehouse(req.params);
      res.status(200).send({
        isError: "false",
        message: "Succes Delete Warehouse",
      });
    } catch (error) {
      next(error);
    }
  },
  restoreWarehouse: async (req, res, next) => {
    try {
      const cekWarehouses = await db.warehouses.findByPk(req.params.id);
      if (cekWarehouses.dataValues.deletedAt === null) {
        throw res.status(409).send({
          isError: true,
          message: "",
          data: null,
        });
      }
      await warehouseService.restoreWarehouse(req.params);
      res.status(200).send({
        isError: false,
        message: "Succes Restore Warehouse",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllWarehouse: async (req, res, next) => {
    try {
      const data = await warehouseService.getAllWarehouse();
      res.status(200).send({
        isError: "false",
        message: "Succes Get All Data Warehouse",
        data,
      });
    } catch (error) {
      next(error);
    }
  },
  updateWarehouse: async (req, res, next) => {
    try {
      const cekNama = await db.warehouses.findOne({
        where: { name: req.body.name },
      });
      if (cekNama) {
        throw res.status(400).send({
          isError: "true",
          message: "Nama gudang sudah tersedia",
        });
      }
      const loc = await opencageService.getLatLong(req.body.cities_id);

      const datas = {
        name: req.body.name,
        cities_id: req.body.cities_id,
        lng: loc.lng,
        lat: loc.lat,
      };

      const hasil = await warehouseService.updateWarehouse({
        ...datas,
        ...req.params,
      });
      res.status(200).send({
        isError: "false",
        message: "Success Update Warehouse",
      });
    } catch (error) {
      next(error);
    }
  },
  getWarehouseTerdekat: async (req, res, next) => {
    try {
      const { address_id, products_id, qty } = req.body;
      const city = await db.users_addresses.findByPk(address_id);
      const loc = await opencageService.getLatLong(city?.dataValues.cities_id);
      const datas = {
        address_id: address_id,
        lat: loc.lat,
        lng: loc.lng,
      };
      let ids = [];
      let hasil = [];
      let newQty = qty;

      while (newQty > 0) {
        const data = await opencageService.getWarehouseTerdekat(datas, ids);
        const cekStock = await stockServices.getStockWhere(
          data.dataValues.id,
          products_id,
          newQty
        );
        if (cekStock.dataValues.stock === 0) {
          ids.push(data.dataValues.id);
        } else if (cekStock.dataValues.stock >= newQty) {
          hasil.push({
            ...data.dataValues,
            products_id,
            stock_berkurang: newQty,
          });
          break;
        } else if (
          cekStock.dataValues.stock > 0 &&
          cekStock.dataValues.stock < newQty
        ) {
          ids.push(data.dataValues.id);
          hasil.push({
            ...data.dataValues,
            products_id,
            stock_berkurang: cekStock.dataValues.stock,
          });
          newQty = newQty - cekStock.dataValues.stock;
        }
      }
      return res.status(200).send({
        isError: false,
        message: "Warehouses Berhasil Didapatkan",
        data: hasil,
      });
    } catch (error) {
      next(error);
    }
  },
  getWarehouseById: async (req, res, next) => {
    try {
      const hasil = await warehouseService.getById(req.params);
      res.status(200).send({
        isError: false,
        message: "Success",
        data: hasil,
      });
    } catch (error) {
      next(error);
    }
  },
};
