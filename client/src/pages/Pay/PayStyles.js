import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Button = styled(Link)`
	padding: 20px;
	border: 1px solid black;
`;
