import React from "react";
import types from "../api/types.json";
import { Link } from "react-router-dom";

const TypesBand = ({ type }) => {
	return (
		<div className="w-full bg-gray-200 flex gap-5 flex-wrap justify-center px-52">
			{types.map((item, idx) => (
				<Link
					to={`/shop/${item.name.toLowerCase()}`}
					key={idx}
					className="hover:bg-white p-2"
				>
					<p>{item.name}</p>
				</Link>
			))}
		</div>
	);
};

export default TypesBand;
