// import axios from "axios";
// import data from "./products.json";

// export async function productsData() {
// 	const products = await axios.get(
// 		"https://fakestoreapiserver.reactbd.com/products"
// 	);
// 	return products;
// }

import data from "./products.json";

export function productsData() {
	// Retourner les données locales
	return Promise.resolve({ data });
}
