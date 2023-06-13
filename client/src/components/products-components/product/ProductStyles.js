import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 300px;
	position: relative;
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Icon = styled.div`
	background-color: rgba(250, 250, 250, 0.6);
	padding: 4px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all 0.5s ease;
	opacity: 0;

	&:hover {
		background-color: rgba(250, 250, 250, 1);
		transform: scale(1.1);
	}
`;

export const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0);
	gap: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;

	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
	&:hover ${Icon} {
		opacity: 1;
	}
`;
