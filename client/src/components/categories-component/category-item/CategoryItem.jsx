import { Container, Image, Info, Title, Button } from "./CategoryItemStyles";

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.image} />
			<Info>
				<Title>{item.title}</Title>
				<Button>Shop Now</Button>
			</Info>
		</Container>
	);
};
export default CategoryItem;
