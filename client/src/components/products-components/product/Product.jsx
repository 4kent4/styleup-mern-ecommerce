import { Container, Icon, Image, Info } from "./ProductStyles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = ({ item }) => {
	return (
		<Container>
			<Image src={item.image} />
			<Info>
				<Icon>
					<ShoppingCartOutlinedIcon />
				</Icon>
				<Icon>
					<SearchIcon />
				</Icon>
				<Icon>
					<FavoriteBorderIcon />
				</Icon>
			</Info>
		</Container>
	);
};
export default Product;
