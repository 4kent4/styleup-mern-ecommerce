import {
	Container,
	Title,
	Description,
	InputContainer,
	Input,
	Button,
} from "./NewsLetterStyles";
import SendIcon from "@mui/icons-material/Send";

const NewsLetterStyles = () => {
	return (
		<Container>
			<Title>NewsLetter</Title>
			<Description>Get timely update from your favorite products</Description>
			<InputContainer>
				<Input placeholder="Your Email" />
				<Button>
					<SendIcon />
				</Button>
			</InputContainer>
		</Container>
	);
};
export default NewsLetterStyles;
