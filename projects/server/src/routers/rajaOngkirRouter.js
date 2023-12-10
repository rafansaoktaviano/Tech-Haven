const router = require("express").Router();
const { rajaOngkirController } = require("../controllers");

router.get("/", rajaOngkirController.getAllCities);
router.get("/pro", rajaOngkirController.getAllPropinsi);

module.exports = router;
