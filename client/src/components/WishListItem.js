import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { removeFromWishlist, resetWishList } from "../redux/etoffesSlice";
import { ToastContainer, toast } from "react-toastify";

const WishListItem = () => {
	const wishList = useSelector((state) => state.etoffes.wishList);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const idString = (_id) => {
		return String(_id).toLowerCase().split(" ").join("");
	};

	const handleDetails = (item) => {
		const rootId = idString(item.title);
		navigate(`/product/${rootId}`, {
			state: {
				item: item,
			},
		});
	};

	return (
		<div className="w-full flex flex-col">
			<div className="w-full text-center py-2">
				<h2 className="font-titleFont text-2xl max-w-screen-xl mx-auto">
					Votre liste de souhait
				</h2>
			</div>
			<div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
				{wishList.map((item) => (
					<div
						className=" relative "
						key={item._id}
					>
						<div
							onClick={() =>
								dispatch(removeFromWishlist(item._id)) &
								toast.error(`${item.title} a été retiré de votre liste de souhait !`)
							}
							className="absolute group cursor-pointer top-4 right-4 py-2 px-2 bg-white rounded-full flex items-center justify-center z-40 hover:bg-red-600 duration-300"
						>
							<button>
								<svg
									className=" w-6 transition-fill duration-300 fill-current group-hover:text-white"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									height="25"
								>
									<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
								</svg>
							</button>
						</div>
						<div
							onClick={() => handleDetails(item)}
							className="w-full h-96 cursor-pointer overflow-hidden"
						>
							<img
								src={item.image}
								alt="Produit"
								className="w-full h-full object-cover group-hover:scale-110 duration-500"
							/>
						</div>
						<div className="w-full border-[1px] px-2 py-4">
							<div className="flex justify-between items-center">
								<div>
									<h2 className="font-titleFont text-base font-bold">
										{item.title.substring(0, 15).charAt(0).toUpperCase() +
											item.title.substring(0, 15).slice(1).toLowerCase()}
									</h2>
								</div>
								<div className="flex justify-end gap-2 relative overflow-hidden w-30 text-sm">
									<p className="font-semibold">{item.price}€</p>
								</div>
							</div>
							<div>
								<p>{item.category}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="w-full text-center flex flex-col items-center justify-center">
				<button
					onClick={() =>
						dispatch(resetWishList()) & toast.error("Votre panier est vide !")
					}
					className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300 w-60"
				>
					Réinitialiser
				</button>
				<Link to="/">
					<button className="py-1 mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
						<span>
							<HiOutlineArrowLeft />
						</span>
						Retour aux produits
					</button>
				</Link>
			</div>
			<ToastContainer
				position="top-left"
				autoClose={3000}
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

export default WishListItem;
