const Product = require("../models/ProductModel");

//CREATE PRODUCT
const createProduct = async (req, res) => {
	const newProduct = new Product(req.body);

	try {
		const saveProduct = await Product.create(newProduct);
		res.status(200).json(saveProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

//GET PRODUCTS
const getProducts = async (req, res) => {
	const queryNew = req.query.new;
	const queryCategory = req.query.category;

	try {
		let getProducts;

		if (queryNew) {
			getProducts = await Product.find().sort({ createdAt: -1 }).limit(1);
		} else if (queryCategory) {
			getProducts = await Product.find({
				categories: {
					$in: [queryCategory],
				},
			});
		} else {
			getProducts = await Product.find();
		}

		if (getProducts === 0) {
			res.status(200).json({ message: "no product found" });
		}

		res.status(200).json(getProducts);
	} catch (error) {
		res.status(500).json(error);
	}
};

//GET SINGLE PRODUCT
const getSingleProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const getSingleProduct = await Product.findById({ _id: id });

		if (!getSingleProduct) {
			return res
				.status(404)
				.json({ message: "Invalid product ID. Product not found." });
		}

		res.status(200).json(getSingleProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

//DELETE PRODUCT
const deleteProduct = async (req, res) => {
	const { id } = req.params;
	try {
		await Product.findByIdAndDelete({ _id: id });
		res.status(200).json("product has been deleted");
	} catch (error) {
		res.status(500).json(error);
	}
};

//UPDATE PRODUCT
const updateProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const updateProduct = await Product.findByIdAndUpdate(
			{ _id: id },
			req.body,
			{ new: true }
		);

		if (!updateProduct) {
			return res
				.status(404)
				.json({ message: "Invalid product ID. Product not found." });
		}
		res.status(200).json(updateProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	createProduct,
	getProducts,
	getSingleProduct,
	deleteProduct,
	updateProduct,
};
