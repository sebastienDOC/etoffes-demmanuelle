import React from "react";
import { cartImg, logo, userLogo, wishImg } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const productData = useSelector((state) => state.etoffes.productData);
	const userInfo = useSelector((state) => state.etoffes.userInfo);
	const userImage = useSelector((state) => state?.etoffes?.userInfo?.image);

	return (
		<div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
			<div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
				<Link to="/">
					<div>
						<img
							src={logo}
							alt="logo"
							className="w-24 rounded-2xl"
						/>
					</div>
				</Link>
				<div className="flex items-center gap-8">
					<ul className="flex items-center gap-8">
						<li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px} cursor-pointer duration-300">
							Home
						</li>
						<li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px} cursor-pointer duration-300">
							Pages
						</li>
						<li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px} cursor-pointer duration-300">
							Shop
						</li>
					</ul>
					<img
						src={wishImg}
						alt="Liste de souhait"
						className="w-10"
					/>
					<Link to="/cart">
						<div className="relative">
							<img
								src={cartImg}
								alt="Panier d'article"
								className="w-6"
							/>
							<span className="absolute w-6 top-1.5 left-0 test-sm flex items-center justify-center font-semibold">
								{productData.length}
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
			</div>
		</div>
	);
};

export default Header;
