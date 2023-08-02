const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register Controller
const authRegisterController = async (req, res) => {
	const { firstName, lastName, username, email, password } = req.body;

	try {
		//Check if the email is already exist :)
		const emailExist = await User.findOne({ email });
		if (emailExist) {
			return res.status(400).json({ message: "Email already exist" });
		}

		//Hash the password :)
		const hashedPassword = await bcrypt.hash(password, 10);

		//Create a new user with a hashed Password
		const newUser = await User.create({
			firstName,
			lastName,
			username,
			email,
			password: hashedPassword,
		});

		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

//Login Controller
const authLoginController = async (req, res) => {
	const { username, password } = req.body;
	try {
		//find username in the database
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		//compare the provide password with the stored hashed password in the database
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: "invalid Password" });
		}

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: "2d" }
		);

		res.status(200).json({ user, accessToken });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { authRegisterController, authLoginController };
