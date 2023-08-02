import { useLocation } from "react-router-dom";
import Products from "../../components/products-components/products/Products";
import {
	Container,
	Title,
	FilterContainer,
	Filter,
	FilterText,
	SelectContainer,
	Select,
	Option,
} from "./ProductListStyles";
import { useState } from "react";

const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	console.log(cat);

	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("newest");

	const handleFilters = (e) => {
		const value = e.target.value;
		setFilters({ ...filters, [e.target.name]: value });
	};

	console.log(filters);
	console.log(sort);
	return (
		<Container>
			<Title>{cat}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products: </FilterText>
					<SelectContainer>
						<Select name="color" onChange={handleFilters}>
							<Option disabled>Color</Option>
							<Option>White</Option>
							<Option>Black</Option>
							<Option>Brown</Option>
							<Option>Red</Option>
							<Option>Blue</Option>
							<Option>Yellow</Option>
							<Option>Green</Option>
						</Select>
						<Select name="size" onChange={handleFilters}>
							<Option disabled>Size</Option>
							<Option>XS</Option>
							<Option>S</Option>
							<Option>M</Option>
							<Option>L</Option>
							<Option>XL</Option>
						</Select>
					</SelectContainer>
				</Filter>
				<Filter>
					<FilterText>Sort Products: </FilterText>
					<Select onChange={(e) => setSort(e.target.value)}>
						<Option value="newest">Newest</Option>
						<Option value="asc">Price (asc)</Option>
						<Option value="desc">Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products cat={cat} filters={filters} sort={sort} />
		</Container>
	);
};
export default ProductList;
