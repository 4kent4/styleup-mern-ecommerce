import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
	display: flex;
	padding: 50px;
`;

export const ImageContainer = styled.div`
	flex: 1;
`;

export const Image = styled.img`
	width: 100%;
	height: 80vh;
	object-fit: cover;
`;

export const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
`;

export const Title = styled.h2`
	font-weight: 300;
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
	padding: 15px;
	font-weight: 400;
	font-size: 14px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	background: teal;
	transition: all 0.2s ease;

	&:hover {
		transform: scale(1.01);
		color: white;
	}
`;
