import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishListItem from "../components/WishListItem";

const WishList = () => {
	const wishList = useSelector((state) => state.etoffes.wishList);

	return (
		<div>
			{wishList[0] ? (
				<div>
					<img
						src="https://i.ibb.co/9w1hRYn/pexels-minan1398-1087727.jpg"
						alt="Bannière wishlist"
						className="w-full h-80 object-cover"
					/>

					<WishListItem />
				</div>
			) : (
				<div className="h-[600px] w-full flex flex-col items-center">
					<img
						src="https://i.ibb.co/9w1hRYn/pexels-minan1398-1087727.jpg"
						alt="Bannière wishlist"
						className="w-full h-80 object-cover"
					/>
					<div className="h-full w-full flex flex-col items-center justify-center">
						<h2 className="text-2xl text-[#D7A099] py-2 w-full text-center">
							Votre liste de souhait est vide, retournez vite faire du shopping !
						</h2>
						<Link to="/shop">
							<button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
								<span>
									<HiOutlineArrowLeft />
								</span>
								Retour aux produits
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default WishList;
