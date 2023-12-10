const categoryService = require("../services/categoryService");
const db = require("../models");
const productService = require("../services/productService");

module.exports = {

  allKategori : async (req, res, next) => {
    try {
        const data = await categoryService.getAllCategory(req.query)
        res.send(data);
    } catch (error) {
        next(error)
    }
  },

  kategoriId : async (req, res, next) => {
    try {
        const data = await categoryService.kategoriId(req.params)
        res.send(data);
    } catch (error) {
        next(error)
    }
  },

  createKategori : async (req, res, next) => {
    try {
      await categoryService.createKategori(JSON.parse(req.body.data), req.files)
      res.status(200).send({
        isError: false,
        message: "Success Create Category",
        data: null,
      });
    } catch (error) {
      next(error)
    }
  },

  updateKategori : async (req, res, next) => {
    try {
      await categoryService.updateKategori(req.params, req.body)
      res.status(200).send({
        isError: false,
        message: "Success Update",
        data: null,
      });
    } catch (error) {
      next(error)
    }
  },

  updateImage : async (req, res, next) => {
    try {
      const hasil = await categoryService.updateImage(req.params, req.files)
      console.log(hasil);
      res.status(200).send({
        isError: false,
        message: "Update Image Success",
        data: null,
      });
    } catch (error) {
      next(error)
    }
  },

  updateStatus : async (req, res, next) => {
    try {
        const hasil = await categoryService.updateStatus(req.params)
        console.log(hasil);
        res.status(200).send({
          isError: false,
          message: "Status berhasil di update",
          data: null,
        });
    } catch (error) {
      next(error)
    }
  },

  deleteKategori : async (req, res, next) => {
    try {
      await categoryService.deleteKategori(req.params);
      res.status(200).send({
        isError: false,
        message: "Succes Delete Product",
        data: null,
      });
    } catch (error) {
     next(error) 
    }
  },

  restoreKategori : async (req, res, next) => {
    try {
      await categoryService.restoreKategori(req.params);
      res.status(200).send({
        isError: false,
        message: "Succes Restore Kategori",
        data : null
      });
    } catch (error) {
      next(error);
    }
  },

};
