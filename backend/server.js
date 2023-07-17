const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectDb");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const stripeRoute = require("./routes/stripeRoute");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

app.get("/", async (req, res) => {
	res.send("hallo");
});

const log = (req, res, next) => {
	console.log(req.method);
	console.log(req.path);
	next();
};

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/", log, stripeRoute);

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
