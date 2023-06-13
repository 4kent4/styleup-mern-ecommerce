import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	height: 60px;
`;

export const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

export const StyledLink = styled(Link)`
	font-weight: bold;
	font-size: 24px;
	color: black;
	font-family: "Tilt Prism", cursive;
	transition: all 0.2 ease;

	&:hover {
		transform: scale(1.01);
	}
`;

export const Center = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	border-radius: 10px;
`;

export const Input = styled.input`
	border: none;
	outline: none;
`;

export const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 16px;
`;

export const MenuItem = styled(Link)`
	font-size: 14px;
	cursor: pointer;
	color: black;
`;
