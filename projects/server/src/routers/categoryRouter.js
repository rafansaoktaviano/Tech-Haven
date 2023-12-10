const router = require("express").Router();
const {categoryController} = require("../controllers")
const upload1 = require("../middlewares/upload1");
const {ownerMiddleware} = require("../middlewares/ownerMiddleware")

router.get("/", categoryController.allKategori)
router.get("/:id", categoryController.kategoriId)
router.post("/",ownerMiddleware,upload1, categoryController.createKategori)
router.put("/:id",ownerMiddleware, categoryController.updateKategori)
router.put("/image/:id",ownerMiddleware,upload1, categoryController.updateImage)
router.put("/status/:id",ownerMiddleware, categoryController.updateStatus)
router.delete("/:id",ownerMiddleware, categoryController.deleteKategori)
router.delete("/restore/:id",ownerMiddleware, categoryController.restoreKategori)

module.exports = router