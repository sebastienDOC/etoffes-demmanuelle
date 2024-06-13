import React from "react";
import Categories from "./Categories";
import Discount from "./Discount";
import Carousel from "./BestSellers";
import data from "../api/products.json"; // Importez vos données de produits ici

const Products = () => {
	// Fonction pour extraire le type à partir du titre du produit
	const getProductType = (title) => {
		const words = title.split(" ");
		if (words.length >= 2) {
			return words[1]; // Le deuxième mot est considéré comme le type
		}
		return "";
	};
	// Extraire tous les types uniques des produits
	const types = [
		...new Set(data.map((product) => getProductType(product.title))),
	];
	return (
		<div className="py-10">
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
					shopping quotidien
				</h1>
				<span className="w-20 h-[3px] bg-black"></span>
				<p className="max-w-[700px] text-gray-600 text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>

			{/* <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
				{products.map((item) => (
					<ProductsCard
						key={item._id}
						product={item}
					/>
				))}
			</div> */}

			<Carousel />

			<Categories types={types} />

			<Discount />
		</div>
	);
};

export default Products;
