import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = ({
	userInfo,
	wishData,
	productData,
	total,
	userImage,
	userLogo,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="lg:hidden mx-10 sm:mx-20">
			<button
				onClick={toggleMenu}
				className="text-black focus:outline-none"
			>
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16m-7 6h7"
					></path>
				</svg>
			</button>
			{isOpen && (
				<div className="absolute top-20 right-0 mt-2 py-2 w-52 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col items-start justify-around">
					<Link
						to="/"
						className="block px-4 py-2 text-black hover:bg-gray-200"
					>
						Accueil
					</Link>
					<Link
						to="/shop"
						className="block px-4 py-2 text-black hover:bg-gray-200"
					>
						Magasin
					</Link>
					<Link
						to="/wishlist"
						className="w-full flex items-center justify-between px-4 py-2 text-black hover:bg-gray-200 relative"
					>
						Liste de souhait
						<span className="w-4 h-4 text-xs flex items-center justify-center font-semibold bg-black text-white rounded-full">
							{wishData.length}
						</span>
					</Link>
					<Link
						to="/cart"
						className="w-full flex items-center justify-between px-4 py-2 text-black hover:bg-gray-200 relative"
					>
						Panier
						<span className="block text-sm font-semibold">{total.toFixed(2)} €</span>
						<span className="w-4 h-4 text-xs flex items-center justify-center font-semibold bg-black text-white rounded-full">
							{productData.length}
						</span>
					</Link>
					<Link
						to="/login"
						className="block px-4 py-2 text-black hover:bg-gray-200"
					>
						<img
							src={userInfo === null ? userLogo : userImage}
							alt="Profil"
							className="w-8 h-8 rounded-full inline-block mr-2"
						/>
						{userInfo && <span className="font-semibold">{userInfo.name}</span>}
					</Link>
				</div>
			)}
		</div>
	);
};

export default BurgerMenu;
