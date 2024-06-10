// Importation des bibliothèques nécessaires
const { faker } = require("@faker-js/faker");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Nombre de références à générer
const numRecords = 50;

// Fonction pour générer une référence de produit
const generateProduct = async () => {
	const categories = ["homme", "femme", "enfants"];
	const adjectives = [
		"magnifique",
		"élégant",
		"chic",
		"confortable",
		"stylish",
		"adorable",
		"moderne",
		"classique",
		"fantaisie",
		"élégant",
		"sportif",
		"extraordinaire",
		"sophistiqué",
		"luxueux",
		"unique",
		"fashion",
		"tendance",
		"étonnant",
		"cool",
	];
	const clothingTypes = [
		"manteau",
		"robe",
		"pantalon",
		"chemise",
		"jupe",
		"veste",
		"pull",
		"costume",
		"t-shirt",
		"short",
		"ensemble",
		"blazer",
		"gilet",
		"sweat",
		"chaussures",
		"jean",
		"blouson",
		"sac",
		"cravate",
		"cardigan",
		"trench",
	];
	const colors = [
		"bleu",
		"rouge",
		"vert",
		"jaune",
		"noir",
		"blanc",
		"gris",
		"rose",
		"violet",
		"orange",
		"marron",
		"turquoise",
		"argent",
		"or",
		"bordeaux",
		"beige",
		"kaki",
		"marine",
		"ivoire",
		"caramel",
		"saumon",
	];

	const randomCategory =
		categories[Math.floor(Math.random() * categories.length)];
	const randomAdjective =
		adjectives[Math.floor(Math.random() * adjectives.length)];
	const randomClothingType =
		clothingTypes[Math.floor(Math.random() * clothingTypes.length)];
	const randomColor = colors[Math.floor(Math.random() * colors.length)];

	const price = parseFloat((Math.random() * 1000).toFixed(2));
	const oldPrice = price + parseFloat((Math.random() * 500).toFixed(2));

	try {
		const response = await axios.get(
			`https://api.unsplash.com/photos/random?query=clothing&client_id=${"yID1jvYwtTiXRfeA6TgK20lgeI_pPwWjQhrJ8JQEPiQ"}`
		);
		if (!response.data.urls || !response.data.urls.regular) {
			throw new Error(
				"L'URL de l'image n'a pas été trouvée dans la réponse de l'API."
			);
		}
		const imageUrl = response.data.urls.regular;
		let credit = `Photo by ${response.data.user.name} on Unsplash`;

		return {
			_id: uuidv4(),
			title:
				`${randomAdjective} ${randomClothingType} ${randomColor}`.toUpperCase(),
			description: faker.commerce.productDescription(),
			oldPrice: oldPrice,
			price: price,
			category: randomCategory.toUpperCase(),
			image: imageUrl,
			credit: credit,
			stock: Math.floor(Math.random() * 1000),
			rating: Math.ceil(Math.random() * 5),
			review: Math.floor(Math.random() * 1000),
		};
	} catch (error) {
		console.error(
			"Une erreur s'est produite lors de la récupération de l'image:",
			error.message
		);
		return createFallbackProduct(
			randomAdjective,
			randomClothingType,
			randomColor,
			price,
			oldPrice,
			randomCategory
		);
	}
};

// Fonction pour créer un produit de substitution en cas d'erreur
const createFallbackProduct = (
	adjective,
	clothingType,
	color,
	price,
	oldPrice,
	category
) => {
	return {
		_id: uuidv4(),
		title: `${adjective} ${clothingType} ${color}`.toUpperCase(),
		description: faker.commerce.productDescription(),
		oldPrice: oldPrice,
		price: price,
		category: category.toUpperCase(),
		image: "https://via.placeholder.com/500x800",
		stock: Math.floor(Math.random() * 1000),
		rating: parseFloat((Math.random() * 5).toFixed(1)),
	};
};

// Générer les données
const generateData = async () => {
	const products = [];
	for (let i = 0; i < numRecords; i++) {
		products.push(await generateProduct());
	}
	return products;
};

// Sauvegarder les données dans un fichier JSON
generateData()
	.then((products) => {
		fs.writeFileSync(
			"./products.json",
			JSON.stringify(products, null, 2),
			"utf-8"
		);
		console.log(`Généré ${numRecords} références de produits.`);
	})
	.catch((error) => {
		console.error(
			"Une erreur s'est produite lors de la génération des données:",
			error.message
		);
	});
