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
				<div className="flex items-center  h-full w-full">
					<div className="flex gap-20 font-bold text-2xl mb-4 text-gray-600 w-full justify-evenly">
						<Link to="/shop/homme">
							<div className="border-[2px]">
								<img
									src="https://i.ibb.co/w7pp84q/pexels-cottonbro-4727552.jpg"
									alt="HOMME"
									className="h-[600px] "
								/>
								<p className="flex items-center justify-center my-5">HOMME</p>
							</div>
						</Link>
						<Link to="/shop/femme">
							<div className="border-[2px]">
								<img
									src="https://i.ibb.co/CsjW9rF/pexels-ulas-ocakli-801520704-20599498.jpg"
									alt="FEMME"
									className="h-[600px]"
								/>
								<p className="flex items-center justify-center my-5">FEMME</p>
							</div>
						</Link>
						<Link to="/shop/enfants">
							<div className="border-[2px]">
								<img
									src="https://i.ibb.co/RTjQ3gm/pexels-sergeymakashin-5368726.jpg"
									alt="ENFANTS"
									className="h-[600px]"
								/>
								<p className="flex items-center justify-center my-5">ENFANTS</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
