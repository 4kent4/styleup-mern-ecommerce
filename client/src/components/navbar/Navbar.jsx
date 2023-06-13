import {
	Container,
	Wrapper,
	Language,
	Left,
	StyledLink,
	Center,
	SearchContainer,
	Input,
	Right,
	MenuItem,
} from "./NavbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<StyledLink to="/">Style Up</StyledLink>
				</Left>
				<Center>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<SearchIcon style={{ fontSize: 16, color: "grey" }} />
					</SearchContainer>
				</Center>
				<Right>
					<MenuItem to="/register">Register</MenuItem>
					<MenuItem to="/login">Sign In</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlinedIcon />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};
export default Navbar;
