import { useEffect, useState } from "react";
// import { popularProducts } from "../../../Data";
import Product from "../product/Product";
import { Container } from "./ProductsStyles";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat
						? `http://localhost:3001/api/products?category=${cat}`
						: "http://localhost:3001/api/products"
				);

				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, [cat]);

	useEffect(() => {
		const filterProducts = () => {
			cat &&
				setFilteredProducts(
					products.filter((item) =>
						Object.entries(filters).every(([key, value]) =>
							item[key].includes(value)
						)
					)
				);
		};
		filterProducts();
	}, [products, cat, filters]);

	console.log(filteredProducts);

	useEffect(() => {
		if (sort === "newest") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === "asc") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			{cat
				? filteredProducts.map((item) => <Product item={item} key={item._id} />)
				: products
						.slice(0, 8)
						.map((item) => <Product item={item} key={item._id} />)}
		</Container>
	);
};
export default Products;
