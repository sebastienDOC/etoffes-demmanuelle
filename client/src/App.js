import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import WishList from "./pages/WishList";

const Layout = () => {
	return (
		<div>
			<Header />
			<ScrollRestoration />
			<Outlet />
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: productsData,
			},
			{
				path: "/product/:id",
				element: <Product />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/wishlist",
				element: <WishList />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
		],
	},
]);

function App() {
	return (
		<div className="font-bodyFont">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
