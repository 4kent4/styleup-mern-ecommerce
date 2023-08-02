import { MenuItem } from "./MenuStyles";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../app/feature/user/userSlice";

const Menu = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();

	console.log(quantity);

	const userLogout = () => {
		dispatch(logout());
		alert("logout successfully");
	};

	return (
		<>
			{!user ? (
				<>
					<MenuItem to="/register">Register</MenuItem>
					<MenuItem to="/login">Sign In</MenuItem>
				</>
			) : (
				<MenuItem onClick={() => userLogout()}>Logout</MenuItem>
			)}

			<MenuItem to="/cart">
				<Badge badgeContent={quantity} color="primary">
					<ShoppingCartOutlinedIcon />
				</Badge>
			</MenuItem>
		</>
	);
};
export default Menu;
