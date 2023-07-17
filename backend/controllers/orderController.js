const Order = require("../models/OrderModel");

//GET ORDER
const getOrder = async (req, res) => {
	try {
		const Order = await Order.find({ userId: req.params.userId });
		res.status(200).json(Order);
	} catch (error) {
		res.status(500).json(error);
	}
};

//CREATE ORDER
const createOrder = async (req, res) => {
	const newOrder = new Order(req.body);
	try {
		const saveOrder = await Order.create(newOrder);
		res.status(200).json(saveOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

//UPDATE ORDER
const updateOrder = async (req, res) => {
	const { id } = req.body;
	try {
		const updateOrder = await Order.findByIdAndUpdate({ _id: id }, req.body, {
			new: true,
		});

		res.status(200).json(updateOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

//DELETE ORDER
const deleteOrder = async (req, res) => {
	const { id } = req.params;
	try {
		await Order.findByIdAndDelete({ _id: id });
		res.status(200).json("product has been deleted");
	} catch (error) {
		res.status(500).json(error);
	}
};

//GET ALL ORDER
const getOrders = async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
};

//GET INCOME
const getIncome = async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

	try {
		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				$project: {
					month: { $month: "$createdAt" },
					sales: "$amount",
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: "$sales" },
				},
			},
		]);
		res.status(200).json(income);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getOrder,
	createOrder,
	updateOrder,
	deleteOrder,
	getOrders,
	getIncome,
};
