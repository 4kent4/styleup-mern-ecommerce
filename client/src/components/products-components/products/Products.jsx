import { popularProducts } from "../../../Data";
import Product from "../product/Product";
import { Container } from "./ProductsStyles";

const Products = () => {
	return (
		<Container>
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};
export default Products;
