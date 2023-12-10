const router = require("express").Router();
const authController = require("../controllers/authController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");

router.post("/register", authController.registerUser);
router.get("/verify/user-:userId", authController.getVerifyToken);
router.post("/verify", authController.verifyUser);
router.post(
    "/resend-verification-email/:userId",
    authController.resendVerificationEmail
);
router.post("/login", authController.loginUser);
router.get("/refresh-token", authorizeLoggedInUser, authController.keepLogin);
router.get(
    "/userdata/:token",
    authorizeLoggedInUser,
    authController.getUserData
);

router.post(
    "/change-password",
    authController.changePassword
);

router.post("/reset-password", authController.resetPassword);
router.post(
    "/send-reset-password-email",
    authController.sendResetPasswordEmail
);
router.get("/reset/:userEmail", authController.getResetToken);
router.get("/reset-token=:reset_token", authController.getUserDataByResetToken);

module.exports = router;
