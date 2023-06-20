import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";

function App() {
	return (
		<Routes>
			<Route path="" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="productList" element={<ProductList />} />
				<Route path="product" element={<Product />} />
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="cart" element={<Cart />} />
			</Route>
		</Routes>
	);
}

export default App;
