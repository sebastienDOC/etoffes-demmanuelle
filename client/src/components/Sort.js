import React, { useState } from "react";
import data from "../api/products.json";

const Sort = ({
	setSelectedFilters,
	priceRange,
	setPriceRange,
	handleMinPriceChange,
	handleMaxPriceChange,
}) => {
	const [filters, setFilters] = useState({
		clothing: new Set(),
		color: new Set(),
	});
	const [showMoreClothing, setShowMoreClothing] = useState(false);
	const [showMoreColor, setShowMoreColor] = useState(false);

	const handleFilterChange = (category, value) => {
		setFilters((prevFilters) => {
			const newFilters = { ...prevFilters };
			if (newFilters[category].has(value)) {
				newFilters[category].delete(value);
			} else {
				newFilters[category].add(value);
			}
			updateSelectedFilters(newFilters);
			return newFilters;
		});
	};

	const updateSelectedFilters = (filters) => {
		setSelectedFilters(filters);
	};

	const handleResetFilters = () => {
		const resetFilters = {
			clothing: new Set(),
			color: new Set(),
		};
		setFilters(resetFilters);
		updateSelectedFilters(resetFilters);
	};

	const getUniqueWords = (position) => {
		const uniqueWords = new Set();
		data.forEach((item) => {
			const word = item.title.split(" ")[position];
			if (word) uniqueWords.add(word);
		});
		return [...uniqueWords];
	};

	const uniqueClothingWords = getUniqueWords(1);
	const uniqueColorWords = getUniqueWords(2);

	const displayedClothingWords = showMoreClothing
		? uniqueClothingWords
		: uniqueClothingWords.slice(0, 5);
	const displayedColorWords = showMoreColor
		? uniqueColorWords
		: uniqueColorWords.slice(0, 5);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				<div>
					<h3 className="font-bold text-lg mb-2">Vêtement</h3>
					{displayedClothingWords.map((word, idx) => (
						<div
							key={idx}
							className="flex items-center"
						>
							<input
								type="checkbox"
								id={`clothing-${word}`}
								name="clothing"
								value={word}
								onChange={() => handleFilterChange("clothing", word)}
								checked={filters.clothing.has(word)}
							/>
							<label
								htmlFor={`clothing-${word}`}
								className="ml-2"
							>
								{word}
							</label>
						</div>
					))}
					<button
						className="text-blue-500 mt-2 focus:outline-none"
						onClick={() => setShowMoreClothing((prev) => !prev)}
					>
						{showMoreClothing ? "Moins de filtres" : "Plus de filtres"}
					</button>
				</div>
				<div>
					<h3 className="font-bold text-lg mb-2">Couleur</h3>
					{displayedColorWords.map((word, idx) => (
						<div
							key={idx}
							className="flex items-center"
						>
							<input
								type="checkbox"
								id={`color-${word}`}
								name="color"
								value={word}
								onChange={() => handleFilterChange("color", word)}
								checked={filters.color.has(word)}
							/>
							<label
								htmlFor={`color-${word}`}
								className="ml-2"
							>
								{word}
							</label>
						</div>
					))}
					<button
						className="text-blue-500 mt-2 focus:outline-none"
						onClick={() => setShowMoreColor((prev) => !prev)}
					>
						{showMoreColor ? "Moins de filtres" : "Plus de filtres"}
					</button>
				</div>
			</div>
			{/* Filtre de prix avec input */}
			<div className="mt-8">
				<h3 className="font-bold mb-2">Prix</h3>
				<div className="flex flex-col items-center gap-2">
					<div>
						<label
							htmlFor="min"
							className="flex items-center justify-center"
						>
							Min
						</label>
						<input
							name="min"
							type="number"
							placeholder="Min"
							value={priceRange.min}
							onChange={handleMinPriceChange}
							className="bg-gray-200 appearance-none h-10 rounded-l px-4 focus:outline-none "
						/>
					</div>
					<div>
						<label
							htmlFor="max"
							className="flex items-center justify-center"
						>
							Max
						</label>
					</div>
					<input
						name="max"
						type="number"
						placeholder="Max"
						value={priceRange.max}
						onChange={handleMaxPriceChange}
						className="bg-gray-200 appearance-none h-10 rounded-r px-4 focus:outline-none"
					/>
				</div>
			</div>
			<button
				className="bg-red-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-red-700 duration-300"
				onClick={handleResetFilters}
			>
				Réinitialiser les filtres
			</button>
		</div>
	);
};

export default Sort;
