import {
	Container,
	Left,
	Logo,
	Description,
	SocialContainer,
	SocialIcon,
	Center,
	Title,
	List,
	ListItem,
	Right,
	ContactContainer,
	ContactItem,
} from "./FooterStyles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>BIG PP</Logo>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea
					voluptas aspernatur possimus eum consequuntur necessitatibus ratione!
					Eaque consequatur molestiae fugit nam quae quo expedita a laboriosam
					quos numquam. Aspernatur.
				</Description>
				<SocialContainer>
					<SocialIcon>
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon>
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon>
						<TwitterIcon />
					</SocialIcon>
					<SocialIcon>
						<PinterestIcon />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>

					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactContainer>
					<ContactItem>
						<RoomIcon />
						123 Imaginary Street Cityville, Imaginaria
					</ContactItem>
					<ContactItem>
						<CallIcon />
						+1 2345 6789 10
					</ContactItem>
					<ContactItem>
						<MailIcon />
						ImaginaryContact@gmail.com
					</ContactItem>
				</ContactContainer>
			</Right>
		</Container>
	);
};
export default Footer;
