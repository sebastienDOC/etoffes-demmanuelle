import React from "react";

const Shipping = () => {
	return (
		<div className="w/full flex justify-around mx-auto bg-gray-200 py-10">
			<div className="flex flex-col justify-center items-center text-center">
				<i className="fa-solid fa-truck-fast fa-2xl mb-5"></i>
				<p className="font-bold">Livraison gratuite en magasin</p>
				<p>et dès 49€ à domicile et en point relais</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center">
				<i className="fa-regular fa-credit-card fa-2xl mb-5"></i>
				<p className="font-bold">Paiement sécurisé</p>
				<p>CB - Paypal - 3 fois sans frais</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center">
				<i className="fa-solid fa-rotate-left fa-2xl mb-5"></i>
				<p className="font-bold">Retours gratuits en magasin</p>
				<p>sous 30 jours</p>
			</div>
		</div>
	);
};

export default Shipping;
