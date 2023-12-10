const { sequelize } = require("../models");
const db = require("../models");

module.exports = {
    createStockHistories : async ({warehouses_id, products_id, quantity, status, reference}) => {
        try {
            const data = await db.product_stock_histories.create({warehouses_id, products_id, quantity, status, reference})
            console.log(data);
        } catch (error) {
            return error
        }
    },

    getAllMutasi : async () => {
        try {
            console.log("all mutasi");
        } catch (error) {
            return error
        }
    },


};
