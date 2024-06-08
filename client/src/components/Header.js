import React from "react";
import { cartImg, logo, userLogo, wishImg } from "../assets/index";

const Header = () => {
	return (
		<div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
			<div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
				<div>
					<img
						src={logo}
						alt="logo"
						className="w-24 rounded-2xl"
					/>
				</div>
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
					<div className="relative">
						<img
							src={cartImg}
							alt="Panier d'article"
							className="w-6"
						/>
						<span className="absolute w-6 top-1.5 left-0 test-sm flex items-center justify-center font-semibold">
							0
						</span>
					</div>
					<img
						src={userLogo}
						alt="Voir le profil"
						className="w-8"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
