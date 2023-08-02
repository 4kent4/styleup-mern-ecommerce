import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Pay from "./pages/Pay/Pay";
import Success from "./pages/success/Success";
import Cancel from "./pages/cancel/Cancel";
import { useSelector } from "react-redux";

const ProtectedRoute = ({
	element: Component,
	authenticated,
	redirectPath,
}) => {
	return authenticated ? <Navigate to={redirectPath} replace /> : <Component />;
};

function App() {
	const user = useSelector((state) => state.user.currentUser);

	return (
		<Routes>
			<Route path="" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/products/:category" element={<ProductList />} />
				<Route path="/product/:id" element={<Product />} />

				<Route
					path="/register"
					element={
						<ProtectedRoute
							element={Register}
							authenticated={user}
							redirectPath="/"
						/>
					}
				/>
				<Route
					path="/login"
					element={
						<ProtectedRoute
							element={Login}
							authenticated={user}
							redirectPath="/"
						/>
					}
				/>

				<Route path="/cart" element={<Cart />} />
				<Route path="/pay" element={<Pay />} />
				<Route path="success" element={<Success />} />
				<Route path="cancel" element={<Cancel />} />
			</Route>
		</Routes>
	);
}

export default App;
