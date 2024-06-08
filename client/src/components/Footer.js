import React from "react";
import { logo, paymentLogo } from "../assets/index";
import { ImGithub } from "react-icons/im";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="bg-black text-[#949494] py-20 font-titleFont">
			<div className="max-w-screen-xl mx-auto grid grid-cols-4">
				{/* ============= LogoIcon Start ============= */}
				<div className="flex flex-col gap-7">
					<img
						src={logo}
						alt="Logo"
						className="w-32 rounded-2xl"
					/>
					<p className="text-white text-sm tracking-wide">© ReactBD.com</p>
					<img
						src={paymentLogo}
						alt="Paiements"
						className="w-56"
					/>
					<div className="flex gap-5 text-lg text-gray-500">
						<ImGithub className="hover:text-white duration-300 cursor-pointer" />
						<FaYoutube className="hover:text-white duration-300 cursor-pointer" />
						<FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
						<FaTwitter className="hover:text-white duration-300 cursor-pointer" />
						<FaInstagram className="hover:text-white duration-300 cursor-pointer" />
					</div>
				</div>
				{/* ============= LogoIcon End ============= */}
				{/* ============= LocateUs Start  ============= */}
				<div className="flex flex-col justify-center">
					<h2 className="text-2xl font-semibold text-white mb-4">Trouvez nous !</h2>
					<div className="text-base flex flex-col gap-2">
						<p>589 rue Jean Jaurès, 21300 Chenôve</p>
						<p>Mobile: 06.57.95.15.38</p>
						<p>Fixe: 03.80.47.12.58</p>
						<p>E-mail: manu@gmail.com</p>
					</div>
				</div>
				{/* ============= LocateUs End ============= */}
				{/* ============= Profile Start ============= */}
				<div className="flex flex-col justify-center">
					<h2 className="text-2xl font-semibold text-white mb-4">Profil</h2>
					<div className="text-base flex flex-col gap-2">
						<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
							<span className="text-lg">
								<BsPersonFill />
							</span>
							Mon compte
						</p>
						<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
							<span className="text-lg">
								<BsPaypal />
							</span>
							Paiement
						</p>
						<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
							<span className="text-lg">
								<FaHome />
							</span>
							Suivi de commande
						</p>
						<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
							<span className="text-lg">
								<MdLocationOn />
							</span>
							Aide & Support
						</p>
					</div>
				</div>
				{/* ============= Profile End ============= */}
				{/* ============= Subscribe Start ============= */}
				<div className="flex flex-col justify-center">
					<input
						className="bg-transparent border px-4 py-2 text-sm"
						placeholder="Votre e-mail"
						type="text"
					/>
					<button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
						Inscription
					</button>
				</div>
				{/* ============= Subscribe End ============= */}
			</div>
		</div>
	);
};

export default Footer;
