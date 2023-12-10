const db = require("./../models");
const rajaOngkirService = require("../services/rajaOngkirService");
module.exports = {
    getAllCities : async (req, res, next) => {
        try {
            const hasil = await rajaOngkirService.getAllCities(req.query)
            res.status(200).send({
                isError: false,
                message: "Success",
                data: hasil,
              });
        } catch (error) {
            next(error)
        }
    },
    getAllPropinsi : async (req, res, next) => {
        try {
            const hasil = await rajaOngkirService.getAllPropinsi()
            res.status(200).send({
                isError: false,
                message: "Success",
                data: hasil,
              });
        } catch (error) {
            next(error)
        }
    },
};
