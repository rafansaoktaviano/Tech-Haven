const authRouter = require("./authRouter");
const productRouter = require("./productRouter");
const orderRouter = require("./orderRouter");
const categoryRouter = require("./categoryRouter");
const warehouseRouter = require("./warehouseRouter");
const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
const stockRouter = require("./stockRouter");
const rajaOngkirRouter = require("./rajaOngkirRouter");
const reportRouter = require("./reportRouter")

module.exports = {
    authRouter,
    productRouter,
    orderRouter,
    categoryRouter,
    warehouseRouter,
    userRouter,
    adminRouter,
    stockRouter,
    rajaOngkirRouter,
    reportRouter
};
