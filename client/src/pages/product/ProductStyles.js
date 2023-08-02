import styled from "styled-components";
import { tablet, mobile, mobileSE } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
	display: flex;
	padding: 50px;

	${tablet({ flexDirection: "column" })}
`;

export const ImageContainer = styled.div`
	flex: 1;
	height: 80vh;

	${tablet({ height: "50vh" })}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
	background-color: blanchedalmond;

	${tablet({ padding: "0px" })}
`;

export const Title = styled.h2`
	font-weight: 300;
	margin: 30px 0;
`;

export const Description = styled.p`
	margin: 20px 0;
`;

export const Price = styled.span`
	font-weight: 200;
	font-size: 40px;
`;

export const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		gap: "20px",
	})}
`;

export const Filter = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 400;
`;

export const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	cursor: pointer;
`;

export const FilterSize = styled.select`
	padding: 5px;
	font-size: 16px;
`;

export const FilterSizeOption = styled.option`
	font-size: 16px;
`;

export const AddContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0;
	width: 50%;

	${mobile({ width: "100%", flexDirection: "column", gap: "20px" })}
`;

export const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const Amount = styled.span`
	width: 30px;
	height: 30px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	background-color: black;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		transform: scale(1.01);
		color: black;
		background-color: #1976d2;
	}
`;
