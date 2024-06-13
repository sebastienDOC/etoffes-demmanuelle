import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import data from "../api/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Sort from "../components/Sort";
import { Link, useLocation } from "react-router-dom";

const Shop = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedFilters, setSelectedFilters] = useState({
		clothing: new Set(),
		color: new Set(),
	});
	const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
	const productsPerPage = 20;

	const location = useLocation();
	const category = location.pathname.split("/").pop();

	useEffect(() => {
		// Reset filters and page when category changes
		setSelectedFilters({
			clothing: new Set(),
			color: new Set(),
		});
		setPriceRange({ min: 0, max: 1000 });
		setCurrentPage(1);
	}, [category]);

	const filterProducts = (product) => {
		// Filter logic based on selected filters and category
		const categoryMatch =
			product.category.toLowerCase() === category.toLowerCase();
		const clothingMatch =
			selectedFilters.clothing.size === 0 ||
			[...selectedFilters.clothing].some((clothing) =>
				product.title.toLowerCase().includes(clothing.toLowerCase())
			);
		const colorMatch =
			selectedFilters.color.size === 0 ||
			[...selectedFilters.color].some((color) =>
				product.title.toLowerCase().includes(color.toLowerCase())
			);
		const priceMatch =
			product.price >= priceRange.min && product.price <= priceRange.max;

		return categoryMatch && clothingMatch && colorMatch && priceMatch;
	};

	const currentProducts = data.filter(filterProducts);

	const totalProductsCount = currentProducts.length;

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleSetSelectedFilters = (filters) => {
		setSelectedFilters(filters);
		setCurrentPage(1);
	};

	const handleMinPriceChange = (event) => {
		const newMin = parseInt(event.target.value);
		if (!isNaN(newMin)) {
			setPriceRange((prevRange) => ({ ...prevRange, min: newMin }));
		}
	};

	const handleMaxPriceChange = (event) => {
		const newMax = parseInt(event.target.value);
		if (!isNaN(newMax)) {
			setPriceRange((prevRange) => ({ ...prevRange, max: newMax }));
		}
	};

	return (
		<div className="flex">
			{/* Menu fixe à gauche */}
			<div className="flex flex-col bg-gray-100 w-64 p-4">
				<h2 className="font-bold text-xl mb-4">Filtres</h2>
				{/* Composant Sort pour les filtres */}
				<Sort
					setSelectedFilters={handleSetSelectedFilters}
					priceRange={priceRange}
					setPriceRange={setPriceRange}
					handleMinPriceChange={handleMinPriceChange}
					handleMaxPriceChange={handleMaxPriceChange}
				/>
			</div>

			{/* Contenu principal à droite */}
			<div className="flex-1 p-4">
				<h2 className="font-bold text-3xl mt-10 text-center">
					Choisissez une catégorie
				</h2>
				<div className="flex items-center  h-full w-full">
					<div className="flex gap-20 font-bold text-2xl mb-4 text-gray-600 w-full justify-evenly">
						<Link to="/shop/homme">
							<div className="">
								<img
									src="https://i.ibb.co/w7pp84q/pexels-cottonbro-4727552.jpg"
									alt="HOMME"
									className="h-96"
								/>
								<p className="flex items-center justify-center">HOMME</p>
							</div>
						</Link>
						<Link to="/shop/femme">
							<div>
								<img
									src="https://i.ibb.co/CsjW9rF/pexels-ulas-ocakli-801520704-20599498.jpg"
									alt="FEMME"
									className="h-96"
								/>
								<p className="flex items-center justify-center">FEMME</p>
							</div>
						</Link>
						<Link to="/shop/enfants">
							<div>
								<img
									src="https://i.ibb.co/RTjQ3gm/pexels-sergeymakashin-5368726.jpg"
									alt="ENFANTS"
									className="h-96"
								/>
								<p className="flex items-center justify-center">ENFANTS</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
