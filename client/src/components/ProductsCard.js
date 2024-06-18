import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	addToWishlist,
	removeFromWishlist,
} from "../redux/etoffesSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const wishList = useSelector((state) => state.etoffes.wishList);
	const _id = product.title;
	const idString = (_id) => {
		return String(_id).toLowerCase().split(" ").join("");
	};
	const rootId = idString(_id);

	const isWishlisted = wishList.some((item) => item._id === product._id);

	const handleDetails = () => {
		navigate(`/product/${rootId}`, {
			state: {
				item: product,
			},
		});
	};

	const handleWishlist = () => {
		if (isWishlisted) {
			dispatch(removeFromWishlist(product._id));
			toast.error(`${product.title} a été retiré de votre liste de souhait !`);
		} else {
			dispatch(
				addToWishlist({
					_id: product._id,
					title: product.title,
					image: product.image,
					price: product.price.toFixed(2),
					quantity: 1,
					description: product.description,
					category: product.category,
				})
			);
			toast.success(`${product.title} a été ajouté de votre liste de souhait !`);
		}
	};

	return (
		<div className="group relative">
			<div
				onClick={handleDetails}
				className="w-full h-96 cursor-pointer overflow-hidden"
			>
				<img
					src={product.image}
					alt="Produit"
					className="w-full h-full object-cover group-hover:scale-110 duration-500"
				/>
			</div>
			<div className="w-full border-[1px] px-2 py-4">
				<div className="flex justify-between items-center">
					<div>
						<h2 className="font-titleFont text-base font-bold">
							{product.title.charAt(0).toUpperCase() +
								product.title.slice(1).toLowerCase()}
						</h2>
					</div>
					<div className="flex justify-end gap-2 relative overflow-hidden w-30 text-sm">
						<div className="flex gap-2 transform group-hover:translate-x-32 transition-transform duration-500">
							<p className="line-through text-gray-500">
								{product.oldPrice.toFixed(2)}€
							</p>
							<p className="font-semibold">{product.price.toFixed(2)}€</p>
						</div>
						<p
							onClick={() =>
								dispatch(
									addToCart({
										_id: product._id,
										title: product.title,
										image: product.image,
										price: product.price.toFixed(2),
										quantity: 1,
										description: product.description,
									})
								) & toast.success(`${product.title} a été ajouté au panier !`)
							}
							className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
						>
							+ Panier
							<span>
								<BsArrowRight />
							</span>
						</p>
					</div>
				</div>
				<div>
					<p>{product.category}</p>
				</div>
				<div
					onClick={handleWishlist}
					className="absolute top-4 right-4 py-2 px-2 bg-white rounded-full flex items-center justify-center cursor-pointer"
				>
					<button className="z-40">
						<svg
							className={`w-6 svg-wishlist ${
								isWishlisted ? "svg-wishlist-active" : ""
							}`}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsCard;
