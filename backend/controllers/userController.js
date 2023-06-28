const User = require("../models/UserModel");

//GET USERS CONTROLLER
const getUsers = async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({ createdAt: -1 }).limit(2)
			: await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json("something went wrong");
	}
};

//GET SINGLE USER
const getSingleUser = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findById({ _id: id });
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json("user does not exist");
	}
};

//DELETE USER
const deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json(`user has been deleted...`);
	} catch (error) {
		res.status(500).json(error);
	}
};

//UPDATE USER

const updateUser = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.findByIdAndUpdate(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		// Update the username
		user.username = username;
		// Check if the password has changed
		if (password) {
			// Hash the new password
			const hashedPassword = await bcrypt.hash(password, 10);
			// Update the user's password
			user.password = hashedPassword;
		}
		// Save the updated user
		const updatedUser = await user.save();
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

//GET USER STATS
const userStats = async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{
				$project: {
					month: { $month: "$createdAt" },
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: 1 },
				},
			},
		]);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = { getUsers, getSingleUser, deleteUser, updateUser, userStats };
