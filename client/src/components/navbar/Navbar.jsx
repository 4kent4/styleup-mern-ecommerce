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
	// MenuItem,
	HamburgerMenuBar,
} from "./NavbarStyles";
import SearchIcon from "@mui/icons-material/Search";

import MenuItem from "./menu/Menu";

// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// import Badge from "@mui/material/Badge";

import MenuIcon from "@mui/icons-material/Menu";

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
						<Input placeholder="search" />
						<SearchIcon style={{ fontSize: 16, color: "grey" }} />
					</SearchContainer>
				</Center>
				<Right>
					{/* Menu Items */}
					{/* <MenuItem to="/register">Register</MenuItem>
					<MenuItem to="/login">Sign In</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlinedIcon />
						</Badge>
					</MenuItem> */}
					<MenuItem />
					<HamburgerMenuBar>
						<MenuIcon />
					</HamburgerMenuBar>
				</Right>
			</Wrapper>
		</Container>
	);
};
export default Navbar;
