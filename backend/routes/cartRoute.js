const express = require("express");
const router = express.Router();
const {
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
	verifyToken,
} = require("../middleware/verifyToken");
const {
	getCart,
	createCart,
	updateCart,
	deleteCart,
	getCarts,
} = require("../controllers/cartController");

//GET CART
router.get("/find/:userId", verifyTokenAndAuthorization, getCart);

//CREATE CART
router.post("/", verifyToken, createCart);

//UPDATE CART
router.put("/:id", verifyTokenAndAuthorization, updateCart);

//DELETE CART
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

//GET ALL USERCART
router.get("/", verifyTokenAndAdmin, getCarts);

module.exports = router;
