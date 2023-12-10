const AuthService = require("../services/authService");

const authController = {
    registerUser: async (req, res) => {
        try {
            const { email, fullname, password } = req.body;

            const serviceResult = await AuthService.registerUser(
                email,
                fullname,
                password
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    getVerifyToken: async (req, res) => {
        try {
            const { userId } = req.params;

            const serviceResult = await AuthService.getVerifyToken(userId);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    verifyUser: async (req, res) => {
        try {
            const { token, users_id } = req.body;

            const serviceResult = await AuthService.verifyUser(token, users_id);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    resendVerificationEmail: async (req, res) => {
        try {
            const { userId } = req.params;

            const serviceResult = await AuthService.resendVerificationEmail(
                userId
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            const serviceResult = await AuthService.loginUser(email, password);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    keepLogin: async (req, res) => {
        try {
            const { token } = req;

            const serviceResult = await AuthService.keepLogin(token);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    getUserData: async (req, res) => {
        try {
            const { token } = req.params;

            const serviceResult = await AuthService.getUserData(token);

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    changePassword: async (req, res) => {
        try {
            const { userId, oldPassword, newPassword } = req.body;

            const serviceResult = await AuthService.changePassword(
                userId,
                oldPassword,
                newPassword
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

    resetPassword: async (req, res) => {
        try {
            const { userId, resetPasswordToken, newPassword } = req.body;

            const serviceResult = await AuthService.resetPassword(
                userId,
                resetPasswordToken,
                newPassword
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

    sendResetPasswordEmail: async (req, res) => {
        try {
            const { userEmail } = req.body;

            const serviceResult = await AuthService.sendResetPasswordEmail(
                userEmail
            );

            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    getResetToken: async(req,res) => {
        try {

            const { userEmail } = req.params;

            const serviceResult = await AuthService.getResetToken(
                userEmail
            );
            
            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    },

    getUserDataByResetToken: async(req,res) => {
        try {

            const { reset_token } = req.params;

            const serviceResult = await AuthService.getUserDataByResetToken(
                reset_token
            );
            
            if (!serviceResult.success) throw serviceResult;

            return res.status(serviceResult.statusCode || 200).json({
                message: serviceResult.message,
                result: serviceResult.data,
                isError: serviceResult.isError,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                message: error.message,
                isError: error.isError,
            });
        }
    }
};

module.exports = authController;
