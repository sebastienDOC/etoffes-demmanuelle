import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Home = () => {
	const [products, setProducts] = useState([]);
	const data = useLoaderData();
	useEffect(() => {
		setProducts(data.data);
	}, [data]);

	return (
		<div>
			<Banner />
			<Products products={products} />
			<ToastContainer
				position="top-left"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
};

export default Home;
