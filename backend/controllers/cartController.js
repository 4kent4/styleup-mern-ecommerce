const Cart = require("../models/CartModel");

//GET CART
const getCart = async (req, res) => {
	try {
		const cart = await Cart.findOne({ userId: req.params.userId });
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
};

//CREATE CART
const createCart = async (req, res) => {
	const newCart = new Cart(req.body);
	try {
		const saveCart = await Cart.create(newCart);
		res.status(200).json(saveCart);
	} catch (error) {
		res.status(500).json(error);
	}
};

//UPDATE CART
const updateCart = async (req, res) => {
	const { id } = req.body;
	try {
		const updateCart = await Cart.findByIdAndUpdate({ _id: id }, req.body, {
			new: true,
		});

		res.status(200).json(updateCart);
	} catch (error) {
		res.status(500).json(error);
	}
};

//DELETE CART
const deleteCart = async (req, res) => {
	const { id } = req.params;
	try {
		await Cart.findByIdAndDelete({ _id: id });
		res.status(200).json("product has been deleted");
	} catch (error) {
		res.status(500).json(error);
	}
};

//GET ALL CART
const getCarts = async (req, res) => {
	try {
		const carts = await Cart.find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = { getCart, createCart, updateCart, deleteCart, getCarts };
