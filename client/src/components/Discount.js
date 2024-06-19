import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import ProductsCard from "./ProductsCard";
import data from "../api/products.json";

const DiscountProducts = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 640);
	const [isMediumScreen, setIsMediumScreen] = useState(
		window.innerWidth >= 640 && window.innerWidth <= 1024
	);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth >= 640);
			setIsMediumScreen(window.innerWidth >= 640 && window.innerWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const transformValue = isMediumScreen
		? `translateX(-${currentIndex * 50}%)`
		: isSmallScreen
		? `translateX(-${currentIndex * 25}%)`
		: `translateX(-${currentIndex * 100}%)`;

	const itemsPerPage = isMediumScreen ? 2 : isSmallScreen ? 4 : 1;

	const productsWithDiscount = data.map((product) => ({
		...product,
		discount: product.oldPrice - product.price,
		discountPercentage:
			((product.oldPrice - product.price) / product.oldPrice) * 100,
	}));

	productsWithDiscount.sort(
		(a, b) => b.discountPercentage - a.discountPercentage
	);

	const topDiscountProducts = productsWithDiscount.slice(0, 12);
	const numPages = Math.ceil(topDiscountProducts.length / itemsPerPage);

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
				Meilleures Réductions
			</h2>
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-300 ease-in-out"
					style={{ transform: transformValue }}
				>
					{topDiscountProducts.map((product, index) => (
						<div
							key={index}
							className={`w-full ${
								isMediumScreen ? "w-1/2" : "sm:w-1/4"
							} px-2 flex-shrink-0`}
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
