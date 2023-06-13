import Navbar from "../components/navbar/Navbar";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<NewsLetter />
			<Footer />
		</div>
	);
};
export default Layout;
