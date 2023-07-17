import StripeCheckout from "react-stripe-checkout";
import { Container, Button } from "./PayStyles";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY =
	"pk_test_51NPLClEBm9syUqnVe9dQXPGzpCvf95LZWVnGaoxhz8qplmTWyApBLUkp6qJzG2u0QHoWEfCMntVcOGt7WcE9z4Cd00DIIpvN2h";

const Pay = () => {
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token.id);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await axios.post("http://localhost:3001/payment", {
					tokenId: stripeToken.id,
					amount: 2000,
				});
				console.log(res.data);
			} catch (error) {
				console.log(error);
			}
		};

		stripeToken && makeRequest();
	}, [stripeToken]);

	return (
		<Container>
			<StripeCheckout
				name="StyleUp"
				billingAddresss
				shippingAddress
				description="Your total is $20"
				amount={2000}
				token={onToken}
				stripeKey={KEY}
			>
				<Button>Pay</Button>
			</StripeCheckout>
		</Container>
	);
};
export default Pay;
