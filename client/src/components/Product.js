import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/etoffesSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
	const dispatch = useDispatch();
	const [details, setDetails] = useState({});
	const [baseQuantity, setBaseQuantity] = useState(1);
	const location = useLocation();
	useEffect(() => {
		setDetails(location.state.item);
	}, []);

	return (
		<div>
			<div className="max-w-screen-xl mx-auto my-10 flex gap-10">
				<div className="w-2/5 relative gap-2">
					<img
						src={details.image}
						alt="Produit"
						className="w-full h-[600px] object-cover"
					/>
					<p className="text-base text-gray-500 w-full text-center">
						{details.credit}
					</p>

					{/* <div className="absolute top-4 right-0">
						{details.isNew && (
							<p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
								New
							</p>
						)}
					</div> */}
				</div>
				<div className="w-3/5 flex flex-col justify-center gap-12">
					<div>
						<h2 className="text-4xl font-semibold">{details.title}</h2>
						<div className="flex items-center gap-4 mt-3">
							<p className="line-through text-gray-500 font-base">
								{details.oldPrice ? details.oldPrice + "€" : ""}
							</p>
							<p className="text-2xl font-medium text-gray-900">
								{details.price ? details.price + "€" : ""}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2 text-base">
						<div className="flex">
							{[...Array(details.rating)].map((_, index) => (
								<MdOutlineStar key={index} />
							))}
						</div>
						<p className="text-xs text-gray-500">({details.review} avis client)</p>
					</div>
					<p className="text-base text-gray-500 -mt-3">{details.description}</p>
					<div className="flex gap-4">
						<div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
							<p className="text-sm">Quantité</p>
							<div className="flex items-center gap-4 text-slm font-semibold">
								<button
									onClick={() =>
										setBaseQuantity(baseQuantity === 1 ? 1 : baseQuantity - 1)
									}
									className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
								>
									-
								</button>
								<span>{baseQuantity}</span>
								<button
									onClick={() => setBaseQuantity(baseQuantity + 1)}
									className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
								>
									+
								</button>
							</div>
						</div>
						<button
							onClick={() =>
								dispatch(
									addToCart({
										_id: details._id,
										title: details.title,
										image: details.image,
										price: details.price,
										quantity: baseQuantity,
										description: details.description,
									})
								) & toast.success(`${details.title} a été ajouté !`)
							}
							className="bg-black text-white py-3 px-6 active:bg-gray-800"
						>
							Ajouter au panier
						</button>
					</div>
					<p className="text-base text-gray-500">
						Catégorie :{" "}
						<span className="font-medium capitalize">{details.category}</span>
					</p>
				</div>
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

export default Product;
