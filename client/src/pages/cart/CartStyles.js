import styled from "styled-components";

import { tablet, mobile, mobileSE } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
	padding: 20px;
`;

export const Title = styled.h2`
	font-weight: 300;
	text-align: center;
`;

export const TopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;

	${mobile({ flexDirection: "column", alignItems: "center", gap: "20px" })}
`;

export const TopTexts = styled.div`
	display: flex;
	gap: 30px;

	${mobile({ textAlign: "center" })}
`;

export const TopText = styled.h3`
	cursor: pointer;
	font-weight: 300;
	text-decoration: underline;
`;

export const TopBotton = styled.button`
	padding: 10px;
	font-weight: 600;
	background: black;
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 14px;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: #aaa;
		color: black;
	}
`;

export const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;

	${tablet({ flexDirection: "column" })}
`;

export const Info = styled.div`
	flex: 2;
`;

export const Product = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px;

	${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
	flex: 2;
	display: flex;

	${mobile({ flexDirection: "column" })}
`;

export const Image = styled.img`
	width: 200px;
	height: 200px;
	object-fit: cover;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;

	${mobile({ width: "100%" })}
`;

export const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: space-around;
	background-color: black;
	color: white;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: solid 2px grey;
	background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

export const PriceDetail = styled.span`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	${mobile({ marginTop: "20px" })}
`;

export const Amount = styled.span`
	width: 30px;
	height: 30px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProductPrice = styled.h2`
	font-size: 30px;
	font-weight: 200;
`;

export const Summary = styled.div`
	flex: 1;
	border: 1px solid #eee;
	border-radius: 5px;
	padding: 20px;
`;

export const SummaryTitle = styled.h1`
	font-weight: 300;
`;

export const SummaryItem = styled.div`
	margin: 5px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => (props.type === "total" ? "500" : "300")};
	font-size: ${(props) => (props.type === "total" ? "14px" : "12px")};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const SummaryButton = styled.button`
	margin-top: 10px;
	padding: 5px;
	font-weight: 400;
	background: black;
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 10px;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: #aaa;
		color: black;
	}
`;
