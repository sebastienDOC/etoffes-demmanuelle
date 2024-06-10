// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBqY3zZ1Hsr5MjGSEqJ2jWXe8lJamvvWuc",
	authDomain: "ecommerce-etoffes.firebaseapp.com",
	projectId: "ecommerce-etoffes",
	storageBucket: "ecommerce-etoffes.appspot.com",
	messagingSenderId: "467076443432",
	appId: "1:467076443432:web:0b8920cf5db2978635741d",
	measurementId: "G-8J8BGC1214",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
