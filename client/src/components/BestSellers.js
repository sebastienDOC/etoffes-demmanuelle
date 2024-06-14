import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import ProductsCard from "./ProductsCard";
import data from "../api/products.json";

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsPerPage = 4;

	const filteredProducts = data.filter(
		(product) => product.rating === 5 && product.review > 400
	);
	const bestSellers = filteredProducts.slice(0, 12);

	const numPages = Math.ceil(bestSellers.length / itemsPerPage) * 3;

	const jumpToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % numPages);
	};

	const jumpToPrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? numPages - 1 : prevIndex - 1
		);
	};

	return (
		<div className="relative my-20">
			<h2 className="font-titleFont text-4xl font-bold mx-10 my-5">
				Meilleures Ventes
			</h2>
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-300 ease-in-out"
					style={{ transform: `translateX(-${currentIndex * 25}%)` }}
				>
					{bestSellers.map((product, index) => (
						<div
							key={index}
							className="w-1/4 px-2 flex-shrink-0"
						>
							<ProductsCard product={product} />
						</div>
					))}
				</div>
			</div>
			{bestSellers.length > itemsPerPage && (
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

export default Carousel;
