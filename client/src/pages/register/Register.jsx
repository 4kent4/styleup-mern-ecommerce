import { Link } from "react-router-dom";
import {
	Container,
	Wrapper,
	Title,
	Label,
	Form,
	Input,
	InputContainer,
	ButtonContainer,
	Button,
	Signin,
} from "./RegisterStyles";

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Create an account</Title>
				<Form>
					<InputContainer>
						<Label>Name:</Label>
						<Input placeholder="name" />
					</InputContainer>

					<InputContainer>
						<Label>Last name:</Label>
						<Input placeholder="last name" />
					</InputContainer>

					<InputContainer>
						<Label>Username:</Label>
						<Input placeholder="username" />
					</InputContainer>

					<InputContainer>
						<Label>Email:</Label>
						<Input placeholder="email" />
					</InputContainer>

					<InputContainer>
						<Label>Password:</Label>
						<Input placeholder="password" />
					</InputContainer>

					<InputContainer>
						<Label>Confirm Password:</Label>
						<Input placeholder="confirm password" />
					</InputContainer>
					<ButtonContainer>
						<Button>Register</Button>
					</ButtonContainer>
				</Form>
				<Signin>
					Already have an account? <Link to="/login">Sign In</Link>
				</Signin>
			</Wrapper>
		</Container>
	);
};
export default Register;
