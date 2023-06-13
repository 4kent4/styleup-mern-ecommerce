import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories-component/categories/Categories";
import Products from "../../components/products-components/products/Products";

const Home = () => {
	return (
		<div>
			<Slider />
			<Categories />
			<Products />
		</div>
	);
};
export default Home;
