const AdminService = require("../services/adminService");
const { userRole } = require("../services/orderService");

// const adminController = {};
const adminController = {
    getAllUsers: async (req, res) => {
        try {
            const serviceResult = await AdminService.getAllUsers();

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getWarehouseData: async (req, res) => {
        try {
            const { warehouses_id } = req.params;

            const serviceResult = await AdminService.getWarehouseData(
                warehouses_id
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    editAllUser: async (req, res) => {
        try {
            const { users_id, status, warehouses_id, role } = req.body;

            const serviceResult = await AdminService.editAllUser(
                users_id,
                status,
                warehouses_id,
                role
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { users_id } = req.params;

            const serviceResult = await AdminService.deleteUser(users_id);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getUserData: async (req, res) => {
        try {
            const { users_id } = req.params;

            const serviceResult = await AdminService.getUserData(users_id);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getStockHistories: async (req, res) => {
        try {
            const serviceResult = await AdminService.getStockHistories();

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },

    getStockMutation: async (req, res) => {
        try {
            const { id } = req.tokens;

            const userData = await userRole(id);

            const serviceResult = await AdminService.getStockMutation(
                userData.dataValues.warehouses_id
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
            });
        }
    },
};

module.exports = adminController;
