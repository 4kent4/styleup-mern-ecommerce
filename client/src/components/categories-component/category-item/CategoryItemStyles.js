import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	margin: 4px;
	height: 70vh;
	position: relative;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;

	object-fit: cover;
`;

export const Title = styled.h1`
	background-color: rgba(250, 250, 250, 0.5);
	font-weight: 300;
	color: rgb(30, 30, 30);
	padding: 4px 8px;
	cursor: pointer;
	opacity: 0;
	transition: all 0.3s ease;
	border-radius: 5px;

	&:hover {
		background-color: rgba(250, 250, 250, 1);
		color: rgb(0, 0, 0);
	}
`;

export const Button = styled.button`
	padding: 4px 8px;
	font-weight: 400;
	font-size: 14px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	background: rgba(250, 250, 250, 1);
	transition: all 0.5s ease;
	opacity: 0;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 24px;
	background-color: rgba(0, 0, 0, 0);
	transition: all 0.3s ease;

	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}

	&:hover ${Title} {
		opacity: 1;
	}
	&:hover ${Button} {
		opacity: 1;
	}
`;
