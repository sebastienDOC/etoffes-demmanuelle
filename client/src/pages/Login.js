import React from "react";
import { githubLogo, googleLogo } from "../assets/index";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addUser, removeUser } from "../redux/etoffesSlice";

const Login = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.etoffes.userInfo);
	const navigate = useNavigate();
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	const handleGoogleLogin = (e) => {
		e.preventDefault();
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				dispatch(
					addUser({
						_id: user.uid,
						name: user.displayName,
						email: user.email,
						image: user.photoURL,
					})
				);
				setTimeout(() => {
					navigate("/");
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				toast.success("Vous avez été déconnecté avec succès !");
				dispatch(removeUser());
				setTimeout(() => {
					navigate("/");
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="w-full flex flex-col items-center justify-center gap-10 py-20">
			<div className="w-full flex items-center justify-center gap-10">
				<div
					onClick={handleGoogleLogin}
					className="text-base w-72 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
				>
					<img
						src={googleLogo}
						alt="Google"
						className="w-8"
					/>
					<span className="text-sm text-gray-900">Se connecter avec Google</span>
				</div>
				{userInfo ? (
					<button
						onClick={handleSignOut}
						className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
					>
						Se déconnecter
					</button>
				) : (
					""
				)}
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

export default Login;
