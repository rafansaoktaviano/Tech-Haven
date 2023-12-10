const Service = require("./service");
const db = require("../models/");
const { sequelize } = require("../models");

class AdminService extends Service {
    static getAllUsers = async () => {
        try {
            const userData = await db.users.findAll();

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get users data!",
                data: userData,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getWarehouseData = async (warehouses_id) => {
        try {
            const warehouseData = await db.warehouses.findAll({
                where: {
                    id: warehouses_id,
                },
            });

            if (!warehouseData.length)
                return this.handleError({
                    statusCode: 404,
                    message: "Warehouse not found!",
                });

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get warehouse data!",
                data: warehouseData,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static editAllUser = async (users_id, status, warehouses_id, role) => {
        try {
            const userData = await db.users.findByPk(users_id);

            if (!userData) {
                return this.handleError({
                    statusCode: 404,
                    message: "User not Found!",
                });
            }

            const test = {};

            if (status) {
                test.status = status;
            }

            if (warehouses_id) {
                test.warehouses_id = warehouses_id;
            }

            if (role) {
                test.role = role;
            }

            const editUser = await db.users.update(test, {
                where: {
                    id: users_id,
                },
            });

            return this.handleSuccess({
                statusCode: 201,
                message: "Success edit user!",
                data: editUser,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static deleteUser = async (users_id) => {
        try {
            const userData = await db.users.findByPk(users_id);

            if (!userData) {
                return this.handleError({
                    statusCode: 404,
                    message: "User not Found!",
                });
            }

            const editUser = await db.users.destroy({
                where: {
                    id: users_id,
                },
            });

            return this.handleSuccess({
                statusCode: 201,
                message: "Success delete user!",
                data: editUser,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getUserData = async (users_id) => {
        try {
            const userData = await db.users.findByPk(users_id);

            if (!userData) {
                return this.handleError({
                    statusCode: 404,
                    message: "User not Found!",
                });
            }

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get user data!",
                data: userData,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getStockHistories = async () => {
        try {
            const userData = await db.products_stocks_histories.findAll({
                include: [
                    {
                        model: db.products,
                    },
                    {
                        model: db.warehouses,
                    },
                ],
            });

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get histories!",
                data: userData,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static getStockMutation = async (warehouses_id) => {
        try {
            const stockMutation = await db.stocks_mutations.findAll({
                where: {
                    request_warehouses_id: warehouses_id,
                    // sender_warehouses_id: warehouses_id,
                    status: "Pending"
                },
                include: [
                    {
                        model: db.products
                    },
                    {
                        model: db.warehouses
                    },
                    {
                        model: db.users
                    }
                ]
            })

            if(!stockMutation.length) return this.handleError({
                statusCode: 400,
                message: "No request found.",
                isError: true
            })

            return this.handleSuccess({
                statusCode: 201,
                message: "Success get stock mutations history!",
                data: stockMutation,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };
}

module.exports = AdminService;
