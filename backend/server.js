const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectDb");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 6000;

app.get("/", async (req, res) => {
	res.send("hallo");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

const startServer = async () => {
	try {
		await connectDb();
		app.listen(PORT, () => {
			console.log(`app listening to ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
