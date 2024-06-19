import React, { useEffect, useState } from "react";
import { logo, userLogo, wishImg } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Band from "./Band";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
	const productData = useSelector((state) => state.etoffes.productData);
	const wishData = useSelector((state) => state.etoffes.wishList);
	const userInfo = useSelector((state) => state.etoffes.userInfo);
	const userImage = useSelector((state) => state?.etoffes?.userInfo?.image);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let price = 0;
		productData.forEach((item) => {
			price += item.price * item.quantity;
		});
		setTotal(parseFloat(price.toFixed(2)));
	}, [productData]);

	return (
		<div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
			<div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
				<Link
					to="/"
					className="mx-5 sm:mx-20 xl:mx-0"
				>
					<img
						src={logo}
						alt="logo"
						className="w-16 sm:w-24 rounded-2xl"
					/>
				</Link>
				<div className="hidden lg:flex items-center gap-8 sm:mx-20 xl:mx-0">
					<ul className="flex items-center gap-8">
						<li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px} cursor-pointer duration-300">
							<Link to="/">Accueil</Link>
						</li>
						<li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px} cursor-pointer duration-300">
							<Link to="/shop">Magasin</Link>
						</li>
					</ul>
					<Link to="/wishlist">
						<div className="relative">
							<img
								src={wishImg}
								alt="Liste de souhait"
								className="w-10"
							/>
							<span className="absolute w-4 top-0 right-0 text-xs flex items-center justify-center font-semibold bg-black text-white rounded-full">
								{wishData.length}
							</span>
						</div>
					</Link>

					<Link to="/cart">
						<div className=" flex items-center justify-center bg-black text-white px-2 py-1 rounded-lg gap-2">
							<div className="relative px-1 py-1">
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 16 16"
									className="text-2xl"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
								</svg>
								<span className="absolute w-4 top-0 right-0 text-xs flex items-center justify-center font-semibold bg-white text-black rounded-full">
									{productData.length}
								</span>
							</div>

							<span className="text-sm flex items-center justify-center font-semibold">
								{total.toFixed(2)} €
							</span>
						</div>
					</Link>
					<Link to="/login">
						<img
							src={userInfo === null ? userLogo : userImage}
							alt="Profil"
							className="w-8 h-8 rounded-full"
						/>
					</Link>
					{userInfo && (
						<p className="text-base font-titleFont font-semibold underline underline-offset-2">
							{userInfo.name}
						</p>
					)}
				</div>
				<BurgerMenu
					userInfo={userInfo}
					wishData={wishData}
					productData={productData}
					total={total}
					userImage={userImage}
					userLogo={userLogo}
				/>
			</div>
			<Band />
		</div>
	);
};

export default Header;
