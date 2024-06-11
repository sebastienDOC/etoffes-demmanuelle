import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Cart = () => {
	const productData = useSelector((state) => state.etoffes.productData);
	const userInfo = useSelector((state) => state.etoffes.userInfo);
	const [total, setTotal] = useState(0);
	const [payNow, setPayNow] = useState(false);

	useEffect(() => {
		let price = 0;
		productData.forEach((item) => {
			price += item.price * item.quantity;
		});
		setTotal(parseFloat(price.toFixed(2)));
	}, [productData]);

	const handleCheckout = () => {
		if (userInfo) {
			setPayNow(true);
		} else {
			toast.error("Veuillez vous connecter pour accéder au paiement");
		}
	};

	return (
		<>
			{productData[0] ? (
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
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod.
									</span>
								</p>
							</div>
							<p className="font-titleFont font-semibold flex justify-between mt-6">
								Total <span className="text-xl font-bold">{total.toFixed(2)} €</span>
							</p>
							<button
								onClick={handleCheckout}
								className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
							>
								Procéder au paiement
							</button>
							{payNow && (
								<div className="w-full mt-6 flex items-center justify-center">
									<StripeCheckout
										stripeKey="pk_test_51PQFRhFYcogHgDlSaJ0UtEcuS5tRT2hd7TxyIguuMzhUnqY3RX8jqexMqFpv4VsqlCTCtu1cB7gShL8ln7ytJj4o00nY199Fif"
										name="Les étoffes d'Emmanuelle"
										amount={total * 100}
										label="Paiement"
										description={`Le montant de votre paiement est de ${total} €`}
										// token={payment}
										email={userInfo.email}
									/>
								</div>
							)}
						</div>
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
					/>{" "}
				</div>
			) : (
				<div className="h-[600px] w-full flex flex-col items-center">
					<img
						src="https://i.ibb.co/0VVvrJn/pexels-polina-tankilevitch-3735633.jpg"
						alt="Bannière panier"
						className="w-full h-80 object-cover"
					/>
					<div className="h-full w-full flex flex-col items-center justify-center">
						<h2 className="text-2xl text-[#D7A099] py-2 w-full text-center">
							Votre panier est vide, retournez vite faire du shopping !
						</h2>
						<Link to="/">
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
		</>
	);
};

export default Cart;
