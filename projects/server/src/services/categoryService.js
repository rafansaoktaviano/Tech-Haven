const { deleteFiles } = require("../helper/deleteFile");
const db = require("./../models");

module.exports = {
  getAllCategory: async ({ category_status }) => {
    try {
      const where = {};
      if (category_status) where.category_status = category_status;
      const allCategory = await db.products_categories.findAll({ where });
      return allCategory;
    } catch (error) {
      return error;
    }
  },
  kategoriId: async ({ id }) => {
    try {
      const allCategory = await db.products_categories.findByPk(id);
      return allCategory;
    } catch (error) {
      return error;
    }
  },

  createKategori: async (data, file) => {
    try {
      const dataImage = file.images.map((value) => {
        return { category_image: value.path };
      });
      const createProduk = await db.products_categories.create({
        ...data,
        category_status: "Active",
        category_image: dataImage[0].category_image,
      });
      return createProduk;
    } catch (error) {
      return error;
    }
  },

  updateKategori: async ({ id }, data) => {
    try {
      const dataKategori = await db.products_categories.findByPk(id);
      console.log(dataKategori.dataValues);
      const update = await db.products_categories.update(
        {
          ...dataKategori,
          ...data,
        },
        { where: { id } }
      );
      return update;
    } catch (error) {
      return error;
    }
  },

  updateImage: async ({ id }, files) => {
    try {
      const images = files.images[0].path;
      const getPath = await db.products_categories.findByPk(id);
      const updateImage = await db.products_categories.update(
        { category_image: images },
        { where: { id } }
      );
      await deleteFiles({
        images: [{ path: getPath.dataValues.category_image }],
      });

      const getDataImage = await db.products_categories.findByPk(id);
      return getDataImage;
    } catch (error) {
      return error;
    }
  },

  updateStatus: async ({ id }) => {
    try {
      const status = await db.products_categories.findByPk(id);
      const data = {};
      if (status.dataValues.category_status === "Active") {
        data["status"] = "Inactive";
      } else {
        data["status"] = "Active";
      }
      await db.products_categories.update(
        {
          category_status: data.status,
        },
        {
          where: { id: id },
        }
      );

      const hasil = await db.products_categories.findByPk(id);
      return hasil;
    } catch (error) {
      return error;
    }
  },

  deleteKategori: async ({ id }) => {
    try {
      await db.products_categories.update(
        { category_status: "Inactive" },
        { where: { id } }
      );
      await db.products.update(
        { product_status: 'Inactive' },
        { where: { products_categories_id : id} } 
      );
      // const product = await db.products.findAll
      const res = await db.products_categories.destroy({ where: { id } });
      return res;
    } catch (error) {
      return error;
    }
  },

  restoreKategori: async ({ id }) => {
    try {
      const res = await db.products_categories.restore({ where: { id } });
      await db.products.update(
        { product_status: 'Active' },
        { where: { products_categories_id : id} } 
      );
      const update = await db.products_categories.update(
        { category_status: "Active" },
        { where: { id } }
      );
      return res;
    } catch (error) {
      return error;
    }
  },
};
