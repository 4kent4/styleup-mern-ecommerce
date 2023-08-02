import {
	Container,
	Wrapper,
	ImageContainer,
	Image,
	InfoContainer,
	Title,
	Description,
	Price,
	FilterContainer,
	Filter,
	FilterTitle,
	FilterColor,
	FilterSize,
	FilterSizeOption,
	AddContainer,
	AmountContainer,
	Amount,
	Button,
} from "./ProductStyles";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { addProduct } from "../../app/feature/cart/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	console.log(id);

	const [product, setProduct] = useState({});

	const [quantity, setQuantity] = useState(1);

	const [color, setColor] = useState("");
	const [size, setSize] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		if (product.size && product.size.length > 0) {
			setSize(product.size[0]);
		}
	}, [product.size]);

	useEffect(() => {
		if (product.color && product.color.length > 0) {
			setColor(product.color[0]);
		}
	}, [product.color]);

	const sizeHandler = (e) => {
		setSize(e.target.value);
	};

	const quantityHandler = (type) => {
		if (type === "inc") {
			setQuantity(quantity + 1);
		} else if (type === "dec" && quantity === 1) {
			setQuantity(1);
		} else {
			setQuantity(quantity - 1);
		}
	};

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await axios.get(
					"http://localhost:3001/api/products/find/" + id
				);
				setProduct(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, []);

	const handleClick = () => {
		dispatch(addProduct({ ...product, quantity, color, size }));
	};

	return (
		<Container>
			<Wrapper>
				<ImageContainer>
					<Image src={product.img} />
				</ImageContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Description>{product.desc}</Description>
					<Price>$ {product.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color?.map((col, index) => (
								<FilterColor
									color={col}
									key={index}
									onClick={() => setColor(col)}
								/>
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize value={size} onChange={sizeHandler}>
								{product.size?.map((s, index) => (
									<FilterSizeOption key={index} value={s}>
										{s}
									</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<RemoveIcon
								onClick={() => quantityHandler("dec")}
								style={{ cursor: "pointer" }}
							/>
							<Amount>{quantity}</Amount>
							<AddIcon
								onClick={() => quantityHandler("inc")}
								style={{ cursor: "pointer" }}
							/>
						</AmountContainer>
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};
export default Product;
