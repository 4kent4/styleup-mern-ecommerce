import {
	Container,
	Wrapper,
	Title,
	TopContainer,
	TopTexts,
	TopText,
	TopBotton,
	BottomContainer,
	Info,
	Product,
	ProductDetail,
	Image,
	Details,
	ProductName,
	ProductId,
	ProductColor,
	ProductSize,
	Hr,
	PriceDetail,
	AmountContainer,
	Amount,
	ProductPrice,
	Summary,
	SummaryTitle,
	SummaryItem,
	SummaryItemText,
	SummaryItemPrice,
	SummaryButton,
} from "./CartStyles";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY = import.meta.env.VITE_STRIPE;

const Cart = () => {
	const cart = useSelector((state) => state.cart);
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
	}, [stripeToken, cart.total]);

	return (
		<Container>
			<Wrapper>
				<Title>Your Bag</Title>
				<TopContainer>
					<TopBotton>Continue shopping</TopBotton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist(0)</TopText>
					</TopTexts>
					<TopBotton>Checkout now</TopBotton>
				</TopContainer>
				<BottomContainer>
					<Info>
						{cart.products.map((product) => (
							<Product key={product.id}>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>
											<b>Proudct:</b> {product.title}
										</ProductName>
										<ProductId>
											<b>ID:</b> {product.id}
										</ProductId>
										<ProductColor color={product.color} />
										<ProductSize>
											<b>Size:</b> {product.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<AmountContainer>
										<RemoveIcon style={{ cursor: "pointer" }} />
										<Amount>{product.quantity}</Amount>
										<AddIcon style={{ cursor: "pointer" }} />
									</AmountContainer>
									<ProductPrice>
										$ {product.price * product.quantity}
									</ProductPrice>
								</PriceDetail>
							</Product>
						))}
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<Hr />
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<Hr />
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<Hr />
						<SummaryItem type="total">
							<SummaryItemText>total</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<Hr />
						<StripeCheckout
							name="Style Up"
							billingAddress
							shippingAddress
							description={`Your total is $${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={KEY}
						>
							<SummaryButton>CHECKOUT NOW</SummaryButton>
						</StripeCheckout>
					</Summary>
				</BottomContainer>
			</Wrapper>
		</Container>
	);
};
export default Cart;
