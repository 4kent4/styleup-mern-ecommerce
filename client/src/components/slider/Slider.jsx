import {
	Container,
	Arrow,
	Wrapper,
	Slide,
	ImageContainer,
	InfoContainer,
	Image,
	Title,
	Desc,
	Button,
} from "./SliderStyles";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";
import { sliderData } from "../../Data";

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<KeyboardDoubleArrowLeftIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderData.map((item) => (
					<Slide key={item.id}>
						<ImageContainer>
							<Image src={item.image} />
						</ImageContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>Shop Now!</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<KeyboardDoubleArrowRightIcon />
			</Arrow>
		</Container>
	);
};
export default Slider;
