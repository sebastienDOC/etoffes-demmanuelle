import React, { useState } from "react";
import data from "../api/products.json";
import { useLocation } from "react-router-dom";

const Sort = ({
	setSelectedFilters,
	priceRange,
	setPriceRange,
	handleMinPriceChange,
	handleMaxPriceChange,
}) => {
	const location = useLocation();
	const [filters, setFilters] = useState({
		type: new Set(),
		color: new Set(),
		size: new Set(),
		category: new Set(),
	});
	const [showMoreType, setShowMoreType] = useState(false);
	const [showMoreColor, setShowMoreColor] = useState(false);
	const [showMoreSize, setShowMoreSize] = useState(false);
	const [showMoreCategory, setShowMoreCategory] = useState(false);

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
			type: new Set(),
			color: new Set(),
			size: new Set(),
			category: new Set(),
		};
		setFilters(resetFilters);
		updateSelectedFilters(resetFilters);
	};

	const getUniqueValues = (attribute) => {
		const uniqueValues = new Set();
		data.forEach((item) => {
			const value = item[attribute];
			if (value) uniqueValues.add(value);
		});
		return [...uniqueValues];
	};

	const uniqueTypeValues = getUniqueValues("type");
	const uniqueColorValues = getUniqueValues("color");
	const uniqueSizeValues = getUniqueValues("size");
	const uniqueCategoryValues = getUniqueValues("category");

	const displayedTypeValues = showMoreType
		? uniqueTypeValues
		: uniqueTypeValues.slice(0, 5);
	const displayedColorValues = showMoreColor
		? uniqueColorValues
		: uniqueColorValues.slice(0, 5);
	const displayedSizeValues = showMoreSize
		? uniqueSizeValues
		: uniqueSizeValues.slice(0, 5);
	const displayedCategoryValues = showMoreCategory
		? uniqueCategoryValues
		: uniqueCategoryValues.slice(0, 5);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				{["/shop/femme", "/shop/homme", "/shop/enfants"].includes(
					location.pathname
				) ? (
					<div>
						<h3 className="font-bold text-lg mb-2">Type</h3>
						{displayedTypeValues.map((value, idx) => (
							<div
								key={idx}
								className="flex items-center"
							>
								<input
									type="checkbox"
									id={`type-${value}`}
									name="type"
									value={value}
									onChange={() => handleFilterChange("type", value)}
									checked={filters.type.has(value)}
								/>
								<label
									htmlFor={`type-${value}`}
									className="ml-2"
								>
									{value}
								</label>
							</div>
						))}
						<button
							className="text-blue-500 mt-2 focus:outline-none"
							onClick={() => setShowMoreType((prev) => !prev)}
						>
							{showMoreType ? "Moins de filtres" : "Plus de filtres"}
						</button>
					</div>
				) : (
					<div>
						<h3 className="font-bold text-lg mb-2">Catégorie</h3>
						{displayedCategoryValues.map((value, idx) => (
							<div
								key={idx}
								className="flex items-center"
							>
								<input
									type="checkbox"
									id={`type-${value}`}
									name="type"
									value={value}
									onChange={() => handleFilterChange("category", value)}
									checked={filters.category.has(value)}
								/>
								<label
									htmlFor={`category-${value}`}
									className="ml-2"
								>
									{value}
								</label>
							</div>
						))}
					</div>
				)}
				<div>
					<h3 className="font-bold text-lg mb-2">Couleur</h3>
					{displayedColorValues.map((value, idx) => (
						<div
							key={idx}
							className="flex items-center"
						>
							<input
								type="checkbox"
								id={`color-${value}`}
								name="color"
								value={value}
								onChange={() => handleFilterChange("color", value)}
								checked={filters.color.has(value)}
							/>
							<label
								htmlFor={`color-${value}`}
								className="ml-2"
							>
								{value}
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
				<div>
					<h3 className="font-bold text-lg mb-2">Taille</h3>
					{displayedSizeValues.map((value, idx) => (
						<div
							key={idx}
							className="flex items-center"
						>
							<input
								type="checkbox"
								id={`size-${value}`}
								name="size"
								value={value}
								onChange={() => handleFilterChange("size", value)}
								checked={filters.size.has(value)}
							/>
							<label
								htmlFor={`size-${value}`}
								className="ml-2"
							>
								{value}
							</label>
						</div>
					))}
					<button
						className="text-blue-500 mt-2 focus:outline-none"
						onClick={() => setShowMoreSize((prev) => !prev)}
					>
						{showMoreSize ? "Moins de filtres" : "Plus de filtres"}
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
							className="text-center appearance-none h-10 rounded-l px-4 focus:outline-none "
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
						className="text-center appearance-none h-10 rounded-r px-4 focus:outline-none"
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
