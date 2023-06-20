import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	background-color: black;
	color: white;

	${tablet({ flexDirection: "column" })}
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
`;

export const LogoContainer = styled.div``;

export const StyledLink = styled(Link)`
	font-weight: bold;
	font-size: 24px;
	color: white;
	font-family: "Tilt Prism", cursive;
`;

export const Description = styled.p``;

export const SocialContainer = styled.div`
	display: flex;
`;

export const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	cursor: pointer;
`;

export const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

export const Title = styled.h3`
	margin-bottom: 20px;
`;

export const List = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	row-gap: 10px;
`;

export const ListItem = styled.li`
	width: 50%;
	cursor: pointer;
`;

export const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

export const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ContactItem = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
