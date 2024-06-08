import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Product = () => {
	const [details, setDetails] = useState({});
	const location = useLocation();
	useEffect(() => {
		setDetails(location.state.item);
	}, []);
	return (
		<div>
			<div className="max-w-screen-xl mx-auto my-10 flex gap-10">
				<div className="w-2/5 relative">
					<img
						src={details.image}
						alt="Produit"
						className="w-full h-full object-cover"
					/>
					<div className="absolute top-4 right-0">
						{details.isNew && (
							<p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
								New
							</p>
						)}
					</div>
				</div>
				<div className="w-3/5 flex flex-col justify-center gap-12">
					<div>
						<h2 className="text-4xl font-semibold">{details.title}</h2>
						<div className="flex items-center gap-4 mt-3">
							<p className="line-through text-gray-500 font-base">
								{details.oldPrice}€
							</p>
							<p className="text-2xl font-medium text-gray-900">{details.price}€</p>
						</div>
					</div>
					<div className="flex items-center gap-2 text-base">
						<div className="flex">
							<MdOutlineStar />
							<MdOutlineStar />
							<MdOutlineStar />
							<MdOutlineStar />
							<MdOutlineStar />
						</div>
						<p className="text-xs text-gray-500">(1 avis client)</p>
					</div>
					<p className="text-base text-gray-500 -mt-3">{details.description}</p>
					<div className="flex gap-4">
						<div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
							<p className="text-sm">Quantité</p>
							<div className="flex items-center gap-4 text-slm font-semibold">
								<button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
									-
								</button>
								<span>{1}</span>
								<button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
									+
								</button>
							</div>
						</div>
						<button className="bg-black text-white py-3 px-6 active:bg-gray-800">
							Ajouter au panier
						</button>
					</div>
					<p className="text-base text-gray-500">
						Catégorie :{" "}
						<span className="font-medium capitalize">{details.category}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
