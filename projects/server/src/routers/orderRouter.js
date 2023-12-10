const router = require("express").Router();

const { orderController } = require("./../controllers");
const authorizeLoggedInUser = require("./../middlewares/authMiddleware");
const {customerMiddleware,adminMiddleware} = require("./../middlewares/customerMiddleware")
const upload1 = require("../middlewares/upload1");



router.post("/cart", authorizeLoggedInUser, orderController.addToCart);
router.post("/cartdata", authorizeLoggedInUser, orderController.getCartData);
router.post("/delete-cart",authorizeLoggedInUser,  orderController.deleteProductCart);
router.post("/update-quantity", authorizeLoggedInUser, orderController.updateQuantityCart);
router.put("/place-order", authorizeLoggedInUser, orderController.placementOrder);
router.post("/address", authorizeLoggedInUser, orderController.address);
router.post("/primary-address", authorizeLoggedInUser, orderController.primaryAddress);
router.get("/raja-ongkir-cities", orderController.getCityRajaOngkir);
router.get("/payments", orderController.paymentMethod);
router.get("/couriers", orderController.getCouriers);
router.post("/add-address",authorizeLoggedInUser, orderController.addAddress);
router.post("/edit-address",authorizeLoggedInUser, orderController.editAddress);
router.post("/shipping-method", orderController.getShippingMethod);
router.post("/user-data",authorizeLoggedInUser,  orderController.getUserData);
router.post("/filter-order",authorizeLoggedInUser,  orderController.filterOrder);
router.post("/order-details",authorizeLoggedInUser ,  orderController.OrderDetailsByTransactionId);
router.post("/status",authorizeLoggedInUser ,  orderController.statusOrder);
router.post("/cancel-order",authorizeLoggedInUser , customerMiddleware,  orderController.cancelOrder);
router.put("/upload",  authorizeLoggedInUser ,upload1, customerMiddleware,  orderController.uploadPaymentAproval);
router.get("/role",  authorizeLoggedInUser ,  orderController.role);
router.put("/order-complete",  authorizeLoggedInUser , customerMiddleware,  orderController.handleOrderComplete);

//ADMIN ROUTER 
router.post("/order-approval",authorizeLoggedInUser ,adminMiddleware, orderController.adminOrderAprroval);
router.post("/approval-details",authorizeLoggedInUser ,adminMiddleware, orderController.adminOrderAprrovalDetails);
router.put("/reject",authorizeLoggedInUser ,adminMiddleware, orderController.rejectOrder);
router.put("/confirm",authorizeLoggedInUser ,adminMiddleware, orderController.confirmOrderAdmin);
router.post("/admin-orders",authorizeLoggedInUser ,adminMiddleware, orderController.adminFilterOrders);
router.get("/warehouses",authorizeLoggedInUser ,adminMiddleware, orderController.warehouseData);
router.post("/delivery-list",authorizeLoggedInUser ,adminMiddleware, orderController.adminOrderDeliveryList);
router.put("/send-package",authorizeLoggedInUser ,adminMiddleware, orderController.adminSendPackage);

module.exports = router;