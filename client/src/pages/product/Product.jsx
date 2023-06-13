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

const Product = () => {
	return (
		<Container>
			<Wrapper>
				<ImageContainer>
					<Image
						src={
							"https://static-01.daraz.pk/p/1245658d60c0ace4e2dde8441b53284f.jpg"
						}
					/>
				</ImageContainer>
				<InfoContainer>
					<Title>Product Title</Title>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						amet nihil iste officiis minus at sint esse incidunt. Quibusdam vero
						quo doloremque quaerat incidunt tenetur neque expedita odio natus
						sed!
					</Description>
					<Price>$ 30</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue " />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<RemoveIcon style={{ cursor: "pointer" }} />
							<Amount>1</Amount>
							<AddIcon style={{ cursor: "pointer" }} />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};
export default Product;
