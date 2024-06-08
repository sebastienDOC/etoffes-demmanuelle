import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
	const productData = useSelector((state) => state.etoffes.productData);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let price = 0;
		productData.forEach((item) => {
			price += item.price * item.quantity;
		});
		setTotal(parseFloat(price.toFixed(2)));
	}, [productData]);

	return (
		<div>
			<img
				src="https://i.ibb.co/0VVvrJn/pexels-polina-tankilevitch-3735633.jpg"
				alt="Bannière panier"
				className="w-full h-80 object-cover"
			/>
			<div className="max-w-screen-xl mx-auto py-20 flex">
				<CartItem />
				<div className="w-1/3 bg-[#fafafa] py-6 px-4">
					<div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
						<h2 className="text-2xl font-medium">Panier Total</h2>
						<p className="flex items-center gap-4 text-base">
							Sous-total
							<span className="font-titleFont font-bold text-xl">
								{total.toFixed(2)} €
							</span>
						</p>
						<p className="flex items-start gap-4 text-base">
							Livraison
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
							</span>
						</p>
					</div>
					<p className="font-titleFont font-semibold flex justify-between mt-6">
						Total <span className="text-xl font-bold">{total.toFixed(2)} €</span>
					</p>
					<button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
						Procéder au paiement
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
