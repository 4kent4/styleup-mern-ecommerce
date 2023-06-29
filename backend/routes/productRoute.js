const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");
const {
	createProduct,
	getProducts,
	getSingleProduct,
	deleteProduct,
	updateProduct,
} = require("../controllers/productController");

//Create Product
router.post("/", verifyTokenAndAdmin, createProduct);

//Get Products
router.get("/", getProducts);

//Get Product by ID
router.get("/find/:id", getSingleProduct);

//DeleteProduct
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//Update Product
router.put("/:id", verifyTokenAndAdmin, updateProduct);

module.exports = router;
