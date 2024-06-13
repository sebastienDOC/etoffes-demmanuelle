import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import types from "../api/types.json";

const TypesCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsPerPage = 5; // Nombre de types affichés par page
	const numPages = Math.ceil(types.length / itemsPerPage) * 4;

	const jumpToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % numPages);
	};

	const jumpToPrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? numPages - 1 : prevIndex - 1
		);
	};

	return (
		<div className="relative bg-gray-100 py-3 my-10">
			<h2 className="font-titleFont text-4xl font-bold mx-10 my-5">
				Tous les types de produits
			</h2>
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-300 ease-in-out"
					style={{ transform: `translateX(-${currentIndex * 20}%)` }}
				>
					{types.map((type, index) => (
						<div
							key={index}
							className="w-1/5 px-2 flex-shrink-0 cursor-pointer group"
						>
							<img
								src={type.img}
								alt={type.name}
								className="h-[350px] w-full object-cover"
							/>
							<div className="p-4 text-center group-hover:bg-white transition duration-300">
								{type.name}
							</div>
						</div>
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