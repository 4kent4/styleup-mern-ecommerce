import styled from "styled-components";
import { mobile, mobileSE, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	background-color: black;
	align-items: center;
	color: white;
	min-height: 80dvh;
	padding: 20px;
`;

export const Wrapper = styled.div`
	padding: 20px;
	width: 40%;

	${tablet({ width: "50%" })}
	${mobile({ width: "90%" })}
	${mobileSE({ width: "100%" })}
`;

export const Title = styled.h2`
	font-weight: 300;
	margin-bottom: 20px;
`;

export const Label = styled.label``;

export const Form = styled.form`
	display: flex;
	gap: 8%;
	flex-wrap: wrap;

	${tablet({ flexDirection: "column", gap: "30px" })}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 42%;
`;

export const Input = styled.input`
	margin-bottom: 10px;
	padding: 8px;
	border-radius: 5px;
	border: none;
	outline: none;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
	padding: 4px 8px;
	font-weight: 400;
	font-size: 14px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	background: rgba(250, 250, 250, 1);
	transition: all 0.5s ease;

	&:hover {
		transform: scale(1.01);
	}
`;

export const Signin = styled.p`
	text-align: center;
	margin-top: 50px;
`;
