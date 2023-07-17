const express = require("express");
const router = express.Router();
const {
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
	verifyToken,
} = require("../middleware/verifyToken");
const {
	getOrder,
	createOrder,
	updateOrder,
	deleteOrder,
	getOrders,
	getIncome,
} = require("../controllers/orderController");

//GET CART
router.get("/find/:userId", verifyTokenAndAuthorization, getOrder);

//CREATE CART
router.post("/", verifyToken, createOrder);

//UPDATE CART
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//DELETE CART
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//GET ALL USERCART
router.get("/", verifyTokenAndAdmin, getOrders);

//GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, getIncome);

module.exports = router;
