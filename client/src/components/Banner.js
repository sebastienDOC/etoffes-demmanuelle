import React, { useEffect, useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const data = [
		"https://i.ibb.co/K0n0vMC/pexels-orlovamaria-4913391-1.jpg",
		"https://i.ibb.co/rH1JLJS/pexels-technobulka-7375091-1.jpg",
		"https://i.ibb.co/8dPkFvs/pexels-tim-douglas-6567356-1.jpg",
		"https://i.ibb.co/VT8LYPZ/pexels-david-bartus-43782-297933-1.jpg",
	];

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
	};
	const nextSlide = () => {
		setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
	};
	useEffect(() => {
		const slideInterval = setInterval(nextSlide, 5000);
		return () => clearInterval(slideInterval);
	}, [currentSlide]);

	return (
		<div className="w-full h-auto overflow-x-hidden">
			<div className="w-scree h-[650px] relative">
				<div
					className="w-[400vw] h-full flex transition-transform duration-1000"
					style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
				>
					<img
						src={data[0]}
						alt="Présentation général des produits"
						className="w-screen h-full object-cover"
						loading="priority"
					/>
					<img
						src={data[1]}
						alt="Présentation général des produits"
						className="w-screen h-full object-cover"
						loading="priority"
					/>
					<img
						src={data[2]}
						alt="Présentation général des produits"
						className="w-screen h-full object-cover"
						loading="priority"
					/>
					<img
						src={data[3]}
						alt="Présentation général des produits"
						className="w-screen h-full object-cover"
						loading="priority"
					/>
				</div>
				<div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-20">
					<div
						onClick={prevSlide}
						className="w-14 h-12 border-[1px] border-white-700 flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-black text-white active:bg-white-900 duration-300"
					>
						<HiArrowLeft />
					</div>
					<div
						onClick={nextSlide}
						className="w-14 h-12 border-[1px] border-white-700 flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-black text-white active:bg-white-900 duration-300"
					>
						<HiArrowRight />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
