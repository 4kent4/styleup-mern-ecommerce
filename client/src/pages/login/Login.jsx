import { Link } from "react-router-dom";
import {
	Container,
	Wrapper,
	Title,
	Label,
	Form,
	Input,
	InputContainer,
	Button,
	Signup,
} from "./LoginStyles";

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign in</Title>
				<Form>
					<InputContainer>
						<Label>Username:</Label>
						<Input placeholder="username" />
					</InputContainer>

					<InputContainer>
						<Label>Password:</Label>
						<Input placeholder="password" />
					</InputContainer>

					<Button>Login</Button>
				</Form>
				<Signup>
					Don't have an account yet? <Link to="/register">Sign Up</Link>
				</Signup>
			</Wrapper>
		</Container>
	);
};
export default Login;