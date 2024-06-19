import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	addToWishlist,
	deleteItem,
	removeFromWishlist,
} from "../redux/etoffesSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const wishList = useSelector((state) => state.etoffes.wishList);
	const productData = useSelector((state) => state.etoffes.productData);
	const _id = product.title;
	const idString = (_id) => {
		return String(_id).toLowerCase().split(" ").join("");
	};
	const rootId = idString(_id);

	const isWishlisted = wishList.some((item) => item._id === product._id);
	const isCarted = productData.some((item) => item._id === product._id);

	const handleDetails = () => {
		navigate(`/product/${rootId}`, {
			state: {
				item: product,
			},
		});
	};

	const handleCart = () => {
		if (isCarted) {
			dispatch(deleteItem(product._id));
			toast.error(`${product.title} a été retiré de votre panier !`);
		} else {
			dispatch(
				addToCart({
					_id: product._id,
					title: product.title,
					image: product.image,
					price: product.price.toFixed(2),
					quantity: 1,
					description: product.description,
					category: product.category,
				})
			);
			toast.success(`${product.title} a été ajouté à votre panier !`);
		}
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
			toast.success(`${product.title} a été ajouté à votre liste de souhait !`);
		}
	};

	const formatTitle = (str) => {
		const words = str.split(" ");
		words.pop(); // Supprime le dernier mot
		const formattedStr = words.join(" ");
		return (
			formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1).toLowerCase()
		);
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
				<div className="flex justify-between items-center gap-2">
					<div>
						<h2 className="font-titleFont text-base font-bold">
							{formatTitle(product.title)}
						</h2>
					</div>
					<div className="flex justify-end gap-2 text-sm">
						<div className="flex flex-col gap-2">
							<p className="line-through text-gray-500">
								{product.oldPrice.toFixed(2)}€
							</p>
							<p className="font-semibold">{product.price.toFixed(2)}€</p>
						</div>
					</div>
				</div>
				<div className="flex justify-between">
					<p>{product.category}</p>
					<p>{product.size}</p>
				</div>
				<div
					onClick={handleWishlist}
					className="absolute top-4 right-4 p-2 bg-white rounded-full flex items-center justify-center cursor-pointer"
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
				<div
					onClick={handleCart}
					className="absolute top-4 left-4 p-2 cursor-pointer duration-500 bg-white rounded-full flex items-center justify-center"
				>
					<button className="z-40">
						<svg
							className={`w-6 svg-wishlist text-2xl ${
								isCarted ? "svg-wishlist-active" : ""
							}`}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
						>
							<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsCard;
