const router = require("express").Router();
const { productController } = require("../controllers");
const upload = require("../middlewares/uploud");
const upload1 = require("../middlewares/upload1");

router.get("/", productController.allProduct);
router.get("/:id", productController.productDetail);
router.post("/", upload, productController.createProduct);
router.put("/:id", productController.updateProduct);
router.put("/image/:id", upload1, productController.updateImage);
router.put("/status/:id", productController.updateStatus);
router.delete("/:id", productController.deleteProduct);
router.delete("/restore/:id", productController.restoreProduct);

module.exports = router;
