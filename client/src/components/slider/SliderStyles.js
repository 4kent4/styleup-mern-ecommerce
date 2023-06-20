import styled from "styled-components";
import { mobileSE, mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: 100vh;
	height: 100dvh;
	width: 100%;
	display: flex;
	position: relative;
	overflow: hidden;

	${tablet({ height: "100%" })}
`;

export const Arrow = styled.div`
	height: 50px;
	width: 50px;
	color: Black;
	position: absolute;
	display: flex;
	background-color: rgba(255, 255, 255, 0.2);
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.8;
	z-index: 2;
	transition: all 0.3s ease;

	&:hover {
		background-color: rgba(255, 255, 255, 1);
		transform: scale(0.8);
	}
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: all 1.5s ease;
	background-color: black;
	color: white;
`;

export const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	height: 100dvh;
	display: flex;
	align-items: center;

	${tablet({ flexDirection: "column", height: "100%" })}
`;

export const ImageContainer = styled.div`
	flex: 1;
	height: 100%;

	${tablet({ height: "50%", width: "100%" })}
	${mobileSE({ height: "30%" })}
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;

	${tablet({ height: "50vh" })}
	${mobileSE({ height: "30vh" })}
`;

export const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;

	${tablet({ height: "50%", padding: "30px" })}
	${mobileSE({ padding: "20px" })}
`;

export const Title = styled.h1`
	font-size: 40px;
	font-weight: 300;

	${tablet({ fontSize: "20px" })}
	${mobile({ fontSize: "18px" })}
	${mobileSE({ fontSize: "16px" })}
`;
export const Desc = styled.p`
	margin: 50px 0;
	font-weight: 200;
	font-size: 20px;

	${tablet({ fontSize: "18px" })}
	${mobile({ fontSize: "14px", margin: "30px 0px" })}
	${mobileSE({ fontSize: "12px", margin: "20px 0px" })}
`;
export const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
	background-color: white;
	transition: all 0.3s ease;
	border: none;
	border-radius: 5px;

	&:hover {
		transform: scale(1.05);
	}
`;
