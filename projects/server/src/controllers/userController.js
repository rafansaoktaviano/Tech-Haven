const UserService = require("../services/userService");

const userController = {
    editUser: async (req, res) => {
        try {
            const { users_id } = req.params;

            const { fullname } = req.body;

            const serviceResult = await UserService.editUser(
                users_id,
                req.body
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

    editUserAvatar: async (req, res) => {
        try {
            const { id } = req.tokens;

            const serviceResult = await UserService.editUserAvatar(
                id,
                req.files

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

    changePrimaryAddress: async(req,res) => {
        try {
            const {users_id, address_id} = req.body
            
            const serviceResult = await UserService.changePrimaryAddress(
                users_id,
                address_id
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

    deleteAddress: async(req,res) => {
        try {
            const {address_id} = req.params
            
            const serviceResult = await UserService.deleteAddress(
                address_id
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

    getAddresses: async(req,res) => {
        try {
            const {users_id} = req.params
            
            const serviceResult = await UserService.getAddresses(
                users_id
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
    }
};

module.exports = userController;
