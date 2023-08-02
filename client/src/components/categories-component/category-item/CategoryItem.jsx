import { Link } from "react-router-dom";
import { Container, Image, Info, Title, Button } from "./CategoryItemStyles";

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Link to={`/products/${item.cat}`}>
				<Image src={item.image} />
				<Info>
					<Title>{item.title}</Title>
					<Button>Shop Now</Button>
				</Info>
			</Link>
		</Container>
	);
};
export default CategoryItem;
