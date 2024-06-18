import React, { useState } from "react";
import ProductsCard from "../components/ProductsCard";
import data from "../api/products.json";
import Sort from "../components/Sort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import TypesBand from "../components/TypesBand";

const TypePage = ({ type, category }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedFilters, setSelectedFilters] = useState({
		category: new Set(),
		type: new Set(),
		color: new Set(),
		size: new Set(),
	});
	const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
	const productsPerPage = 20; // Nombre de produits par page

	const filterProducts = (product) => {
		const categoryMatch =
			selectedFilters.category.size === 0 ||
			[...selectedFilters.category].some((category) =>
				product.category.toLowerCase().includes(category.toLowerCase())
			);
		const typeMatch = product?.type?.toLowerCase() === type?.name?.toLowerCase();
		const colorMatch =
			selectedFilters.color.size === 0 ||
			[...selectedFilters.color].some((color) =>
				product.color.toLowerCase().includes(color.toLowerCase())
			);
		const sizeMatch =
			selectedFilters.size.size === 0 ||
			[...selectedFilters.size].some((size) =>
				product.size.toLowerCase().includes(size.toLowerCase())
			);
		const priceMatch =
			product.price >= priceRange.min && product.price <= priceRange.max;

		return categoryMatch && typeMatch && colorMatch && sizeMatch && priceMatch;
	};

	const currentProducts = data.filter(filterProducts);
	const totalProductsCount = currentProducts.length;

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// Calcul du début et de la fin des produits affichés pour la pagination
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const displayedProducts = currentProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

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
			<div className="flex flex-col bg-gray-200 w-64 p-4">
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
			<div className="flex-1 mt-10 flex-col">
				<TypesBand type={type.name} />
				<h2 className="font-bold text-3xl m-4 text-center">
					{type?.name.toUpperCase()}
				</h2>

				{totalProductsCount !== 0 && (
					<Link to="/">
						<button className="mt-8 ml-7 my-5 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
							<span>
								<HiOutlineArrowLeft />
							</span>
							Retour à l'accueil !
						</button>
					</Link>
				)}

				{/* Affichage en cas de produits non trouvés */}
				{totalProductsCount === 0 && (
					<p className="text-center text-red-500 font-bold mb-4">
						Aucun produit ne correspond à votre recherche.
					</p>
				)}

				{/* Liste de produits */}
				<div className="grid grid-cols-4 gap-4 p-4">
					{displayedProducts.map((item) => (
						<ProductsCard
							key={item._id}
							product={item}
						/>
					))}
				</div>

				{/* Pagination */}
				{currentProducts.length > productsPerPage && (
					<div className="flex justify-center mt-4">
						<button
							className={`${
								currentPage === 1
									? "bg-gray-300 cursor-not-allowed"
									: "bg-gray-400 hover:bg-gray-500"
							} text-white py-2 px-4 rounded-l`}
							onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
							disabled={currentPage === 1}
						>
							<FontAwesomeIcon icon={faChevronLeft} />
						</button>
						{Array.from({
							length: Math.ceil(totalProductsCount / productsPerPage),
						}).map((_, index) => (
							<button
								key={index}
								className={`${
									currentPage === index + 1
										? "bg-gray-400"
										: "bg-gray-300 hover:bg-gray-500"
								} text-white py-2 px-4`}
								onClick={() => paginate(index + 1)}
							>
								{index + 1}
							</button>
						))}
						<button
							className={`${
								currentPage === Math.ceil(totalProductsCount / productsPerPage)
									? "bg-gray-300 cursor-not-allowed"
									: "bg-gray-400 hover:bg-gray-500"
							} text-white py-2 px-4 rounded-r`}
							onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
							disabled={
								currentPage === Math.ceil(totalProductsCount / productsPerPage)
							}
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>
				)}

				<Link to="/">
					<button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
						<span>
							<HiOutlineArrowLeft />
						</span>
						Retour à l'accueil !
					</button>
				</Link>
			</div>
			<ToastContainer
				position="top-left"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
};

export default TypePage;
