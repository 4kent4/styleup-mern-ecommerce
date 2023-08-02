const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			require: [true, "please enter first name"],
		},
		lastName: {
			type: String,
			require: [true, "please enter last name"],
		},
		username: {
			type: String,
			require: [true, "please input username"],
			unique: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
