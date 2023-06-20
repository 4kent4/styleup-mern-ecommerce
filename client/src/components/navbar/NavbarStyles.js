import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: 60px;
	${tablet({ height: "50px" })}
`;

export const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	${tablet({ padding: "10px 10px" })}
`;

export const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${tablet({ display: "none" })}
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

	${tablet({ fontSize: "16px" })}
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
	border-radius: 5px;

	${tablet({ marginLeft: "0px" })}
`;

export const Input = styled.input`
	border: none;
	outline: none;
	${mobile({ width: "50px" })}
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

	${tablet({ display: "none" })}
`;

export const HamburgerMenuBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	display: none;

	${tablet({ display: "flex" })}
`;
