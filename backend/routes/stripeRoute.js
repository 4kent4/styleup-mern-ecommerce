const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
	try {
		const { id, amount } = req.body;
		const stripeRes = await stripe.charges.create({
			source: id,
			amount: amount,
			currency: "usd",
		});

		res.status(200).json(stripeRes);
	} catch (stripeErr) {
		res.status(500).json({ message: "something wen wrong" });
	}
});

module.exports = router;
