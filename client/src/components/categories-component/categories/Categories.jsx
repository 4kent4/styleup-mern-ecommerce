import { Container } from "./CategoriesStyles";
import { categories } from "../../../Data";
import CategoryItem from "../category-item/CategoryItem";

const Categories = () => {
	return (
		<Container>
			{categories.map((item) => (
				<CategoryItem item={item} key={item.id} />
			))}
		</Container>
	);
};
export default Categories;
