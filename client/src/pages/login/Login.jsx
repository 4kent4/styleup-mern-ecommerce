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
	Signup,
	Error,
} from "./LoginStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import login from "../../app/feature/user/apiCalls";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const { isFetching, error } = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { username, password });
	};
	return (
		<Container>
			<Wrapper>
				<Title>Sign in</Title>
				<Form>
					<InputContainer>
						<Label>Username:</Label>
						<Input
							placeholder="username"
							type="text"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</InputContainer>

					<InputContainer>
						<Label>Password:</Label>
						<Input
							placeholder="password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputContainer>
					<ButtonContainer>
						<Button onClick={handleClick} disabled={isFetching}>
							Login
						</Button>
						<br />
						{error && <Error>Invalid user</Error>}
					</ButtonContainer>
				</Form>
				<Signup>
					Don't have an account yet? <Link to="/register">Sign Up</Link>
				</Signup>
			</Wrapper>
		</Container>
	);
};
export default Login;
