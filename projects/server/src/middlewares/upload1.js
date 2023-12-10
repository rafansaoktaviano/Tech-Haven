const { multerupload } = require("./../lib/multer");

const { deleteFiles } = require("./../helper/deleteFile");

const upload1 = async (req, res, next) => {
  const result = multerupload.fields([{ name: "images" }]);
  const allowedMimeTypes = ["image/jpeg", "image/png"];
  result(req, res, function (err) {

    try {
      if (err) throw err;
      if (!req.files.images) throw res.status(409).send("tidak ada gambar yang di uploud");
      const totalImages = req.files.images.length;
      if (totalImages > 1) {
        throw res.status(409).send(`Jumlah gambar melebihi batas maksimal. Hanya diperbolehkan 1 gambar.`);
      }
      // console.log(req.files);
      req.files.images.forEach((values) => {
        if (values.size > 1000000)
          throw {
            message: `${values.originalname} is Too Large!`,
            files: req.files,
          };
      });
      next()
    } catch (error) {
      deleteFiles(req.files);
      next(error);
    }
  });
};

module.exports = upload1;