import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
	return (
		<div className="flex mb-10">
			{/* Contenu principal */}
			<div className="flex-1 p-4">
				<h2 className="font-bold text-3xl mt-10 text-center">
					Choisissez une catégorie
				</h2>
				<div className="flex items-center h-full w-full">
					<div className="flex font-bold text-2xl mb-4 text-gray-600 w-full justify-evenly w-3/3 gap-5">
						<Link
							to="/shop/homme"
							className="w-1/3 group border-[2px]"
						>
							<div className="overflow-hidden">
								<img
									src="https://i.ibb.co/w7pp84q/pexels-cottonbro-4727552.jpg"
									alt="HOMME"
									className="h-72 lg:h-[550px] w-full object-cover group-hover:scale-110 duration-500"
								/>
							</div>
							<p className="flex items-center justify-center my-5 group-hover:bg-white transition duration-300">
								HOMME
							</p>
						</Link>
						<Link
							to="/shop/femme"
							className="w-1/3 group border-[2px]"
						>
							<div className=" overflow-hidden">
								<img
									src="https://i.ibb.co/CsjW9rF/pexels-ulas-ocakli-801520704-20599498.jpg"
									alt="FEMME"
									className="h-72 lg:h-[550px] w-full object-cover group-hover:scale-110 duration-500"
								/>
							</div>
							<p className="flex items-center justify-center my-5 group-hover:bg-white transition duration-300 overflow-hidden">
								FEMME
							</p>
						</Link>
						<Link
							to="/shop/enfants"
							className="w-1/3 group border-[2px]"
						>
							<div className="overflow-hidden">
								<img
									src="https://i.ibb.co/RTjQ3gm/pexels-sergeymakashin-5368726.jpg"
									alt="ENFANTS"
									className="h-72 lg:h-[550px] w-full object-cover group-hover:scale-110 duration-500"
								/>
							</div>
							<p className="flex items-center justify-center my-5 group-hover:bg-white transition duration-300">
								ENFANTS
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
