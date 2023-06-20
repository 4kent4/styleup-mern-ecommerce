import { MenuItem } from "./MenuStyles";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Menu = () => {
	return (
		<>
			<MenuItem to="/register">Register</MenuItem>
			<MenuItem to="/login">Sign In</MenuItem>
			<MenuItem>
				<Badge badgeContent={4} color="primary">
					<ShoppingCartOutlinedIcon />
				</Badge>
			</MenuItem>
		</>
	);
};
export default Menu;
