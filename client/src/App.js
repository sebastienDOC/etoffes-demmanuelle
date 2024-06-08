import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./components/Product";

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
