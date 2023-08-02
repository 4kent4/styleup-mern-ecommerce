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
import axios from "axios";
import { useState } from "react";

const Register = () => {
	const initialState = {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const [formData, setFormData] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { firstName, lastName, username, email, password, confirmPassword } =
			formData;

		//check if password is equal to confirm password
		if (password !== confirmPassword) {
			alert("Password and Confirm-Password not match");
			return;
		}
		try {
			const res = await axios.post("http://localhost:3001/api/auth/register", {
				firstName,
				lastName,
				username,
				email,
				password,
			});
			console.log(res.data);
			alert("Registered");
			setFormData(initialState);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Wrapper>
				<Title>Create an account</Title>
				<Form onSubmit={handleSubmit}>
					<InputContainer>
						<Label>First Name:</Label>
						<Input
							placeholder="first name"
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
						/>
					</InputContainer>

					<InputContainer>
						<Label>Last name:</Label>
						<Input
							placeholder="last name"
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
						/>
					</InputContainer>

					<InputContainer>
						<Label>Username:</Label>
						<Input
							placeholder="username"
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
						/>
					</InputContainer>

					<InputContainer>
						<Label>Email:</Label>
						<Input
							placeholder="email"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
					</InputContainer>

					<InputContainer>
						<Label>Password:</Label>
						<Input
							placeholder="password"
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
						/>
					</InputContainer>

					<InputContainer>
						<Label>Confirm Password:</Label>
						<Input
							placeholder="confirm password"
							type="password"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleChange}
						/>
					</InputContainer>
					<ButtonContainer>
						<Button type="submit">Register</Button>
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
