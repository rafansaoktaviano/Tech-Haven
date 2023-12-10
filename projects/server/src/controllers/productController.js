const productService = require("../services/productService");
const warehouseService = require("../services/warehouseService")
const db = require("./../models");
const { sequelize } = require("./../models");
const { deleteFiles } = require("./../helper/deleteFile");
module.exports = {
  allProduct: async (req, res, next) => {
    try {
      const data = await productService.getAllProduct(req.query);
      res.send(data);
    } catch (error) {
      next(error);
    }
  },

  productDetail: async (req, res, next) => {
    try {
      const data = await productService.getProductDetails(req.params);
      res.status(200).send(data);
    } catch (error) {
      // console.log(error);
      next(error);
    }
  },

  createProduct: async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const data = JSON.parse(req.body.data);
      const createdProduct = await db.products.create(
        { ...data, product_status : "Active" },
        { transaction: t }
      );
      const dataImage = req.files.images.map((value) => {
        return { image: value.path };
      });
      const datasImage = dataImage.map((obj, index) => {
        return { products_id: createdProduct.dataValues.id, ...obj };
      });
      const dataWarehouse = await warehouseService.getAllWarehouse()
      // res.send(dataWarehouse);
      const dataStock = dataWarehouse.map((obj, index) => {
        return { products_id: createdProduct.dataValues.id, stock : 0, warehouses_id : obj.id };
      });
      
      // const dataMutasi = data.stock.map((obj, index) => {
      //   return {
      //     warehouses_id: obj.warehouses_id,
      //     status: "Bertambah",
      //     quantity: obj.stock,
      //     reference: "Manual",
      //     products_id: createdProduct.dataValues.id,
      //   };
      // });
      // [
      //   {
      //     status: "bertambah",
      //     quantity: 5,
      //     reference: "manual",
      //     products_id: createdProduct.dataValues.id,
      //     // warehouses_id :
      //   },
      // ];
      await db.products_images.bulkCreate(datasImage, { transaction: t });
      await db.products_stocks.bulkCreate(dataStock, { transaction: t });
      // await db.products_stocks_histories.bulkCreate(dataMutasi, { transaction: t });
      await t.commit();
      res.status(200).send({
        isError: false,
        message: "Create Product Success",
        data: null,
      });
    } catch (error) {
      console.log(error);
      deleteFiles(req.files);
      await t.rollback();
      next(error);
    }
  },

  updateProduct: async (req, res, next) => {
    try {
      const hasil = await productService.updateProduct(req.params, req.body);
      res.status(200).send({
        isError: false,
        message: "Success Update",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },

  updateImage: async (req, res, next) => {
    try {
      const { id } = req.params;
      const hasil = await productService.updateImage(id, req.files);
      // console.log(hasil);
    } catch (error) {
      next(error);
    }
  },

  updateStatus: async (req, res, next) => {
    try {
      await productService.updateStatus(req.params);
      res.status(200).send({
        isError: false,
        message: "Status berhasil di update",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },

  deleteProduct: async (req, res, next) => {
    try {
      await productService.deleteProduct(req.params);
      res.status(200).send({
        isError: false,
        message: "Succes Delete Product",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },

  restoreProduct: async (req, res, next) => {
    try {
      await productService.restoreProduct(req.params);
      res.status(200).send({
        isError: false,
        message: "Succes Restore Product",
      });
    } catch (error) {
      next(error);
    }
  },
};
