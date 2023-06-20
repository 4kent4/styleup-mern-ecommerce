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

const Cart = () => {
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
						<Product>
							<ProductDetail>
								<Image src="https://cdn11.bigcommerce.com/s-1b7de/images/stencil/1280x1280/products/3289/9769/MAXIE_14937JWSS_IND-01__67498.1619490228.jpg?c=2" />
								<Details>
									<ProductName>
										<b>Proudct:</b> Denim Longsleeves
									</ProductName>
									<ProductId>
										<b>ID:</b> 0909211251
									</ProductId>
									<ProductColor color="Blue" />
									<ProductSize>
										<b>Size:</b> M
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<AmountContainer>
									<RemoveIcon style={{ cursor: "pointer" }} />
									<Amount>2</Amount>
									<AddIcon style={{ cursor: "pointer" }} />
								</AmountContainer>
								<ProductPrice>$ 300</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
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
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<Hr />
						<SummaryButton>Checkout now</SummaryButton>
					</Summary>
				</BottomContainer>
			</Wrapper>
		</Container>
	);
};
export default Cart;
