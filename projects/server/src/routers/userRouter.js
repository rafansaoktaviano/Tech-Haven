const router = require("express").Router();
const userController = require("../controllers/userController");
const authorizeLoggedInUser = require("../middlewares/authMiddleware");
const upload1 = require("../middlewares/upload1");

router.patch("/user=:users_id", authorizeLoggedInUser, userController.editUser);

router.put(
    "/address",
    authorizeLoggedInUser,
    userController.changePrimaryAddress
);

router.delete(
    "/delete-address/:address_id",
    authorizeLoggedInUser,
    userController.deleteAddress
);

router.post(
    "/avatar",
    authorizeLoggedInUser,
    upload1,
    userController.editUserAvatar
);

router.get(
    "/address/user=:users_id",
    authorizeLoggedInUser,
    userController.getAddresses
);

module.exports = router;
