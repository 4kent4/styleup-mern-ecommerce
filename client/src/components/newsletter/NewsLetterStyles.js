import styled from "styled-components";

export const Container = styled.div`
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
`;

export const Title = styled.h1`
	font-size: 70px;
`;

export const Description = styled.p`
	font-size: 24px;
	font-weight: 300;
`;
export const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
	border-radius: 5px;
	padding: 8px;
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	padding-left: 8px;
`;

export const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}
`;
