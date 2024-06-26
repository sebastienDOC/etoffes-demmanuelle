import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import types from "../api/types.json";
import { Link } from "react-router-dom";

const TypesCarousel = () => {
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
		? `translateX(-${currentIndex * 20}%)`
		: `translateX(-${currentIndex * 100}%)`;

	const itemsPerPage = isMediumScreen ? 2 : isSmallScreen ? 5 : 1;

	const numPages = Math.ceil(types.length / itemsPerPage);

	const jumpToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % numPages);
	};

	const jumpToPrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? numPages - 1 : prevIndex - 1
		);
	};

	return (
		<div className="relative bg-gray-200 py-3 my-20">
			<h2 className="font-titleFont text-4xl font-bold mx-10 my-5">
				Tous les produits
			</h2>
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-300 ease-in-out"
					style={{ transform: transformValue }}
				>
					{types.map((type, index) => (
						<Link
							to={`/shop/${type.name.toLowerCase()}`}
							key={index}
							className={`w-full ${
								isMediumScreen ? "w-1/2" : "sm:w-1/5"
							} px-2 flex-shrink-0 cursor-pointer group overflow-hidden`}
						>
							<div className="w-full h-96 overflow-hidden">
								<img
									src={type.img}
									alt={type.name}
									className="w-full h-full object-cover group-hover:scale-110 duration-500"
								/>
							</div>
							<div className="p-4 text-center group-hover:bg-white transition duration-300">
								{type.name}
							</div>
						</Link>
					))}
				</div>
			</div>
			{types.length > itemsPerPage && (
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

export default TypesCarousel;
