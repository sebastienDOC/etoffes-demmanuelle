import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import ProductsCard from "./ProductsCard";
import data from "../api/products.json";

const DiscountProducts = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsPerPage = 4;

	// Calcul de la réduction pour chaque produit
	const productsWithDiscount = data.map((product) => ({
		...product,
		discount: product.oldPrice - product.price,
		discountPercentage:
			((product.oldPrice - product.price) / product.oldPrice) * 100,
	}));

	// Trier les produits par ordre décroissant de réduction
	productsWithDiscount.sort(
		(a, b) => b.discountPercentage - a.discountPercentage
	);

	// Sélectionner les 10 produits avec la plus grande réduction
	const topDiscountProducts = productsWithDiscount.slice(0, 12);
	const numPages = Math.ceil(topDiscountProducts.length / itemsPerPage) * 3;

	const jumpToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % numPages);
	};

	const jumpToPrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? numPages - 1 : prevIndex - 1
		);
	};

	return (
		<div className="relative">
			<h2 className="font-titleFont text-4xl font-bold mx-10 my-5">
				Meilleures Réductions
			</h2>
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-300 ease-in-out"
					style={{ transform: `translateX(-${currentIndex * 25}%)` }}
				>
					{topDiscountProducts.map((product, index) => (
						<div
							key={index}
							className="w-1/4 px-2 flex-shrink-0"
						>
							<ProductsCard product={product} />
							<p className="text-sm mt-2 text-red-600 text-center">
								Réduction : -{product.discountPercentage.toFixed(2)}%
							</p>
						</div>
					))}
				</div>
			</div>
			{topDiscountProducts.length > itemsPerPage && (
				<>
					<button
						className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full transition duration-300 hover:bg-gray-900"
						onClick={jumpToPrev}
					>
						<HiOutlineArrowLeft className="h-6 w-6" />
					</button>
					<button
						className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full transition duration-300 hover:bg-gray-900"
						onClick={jumpToNext}
					>
						<HiOutlineArrowRight className="h-6 w-6" />
					</button>
				</>
			)}
		</div>
	);
};

export default DiscountProducts;
