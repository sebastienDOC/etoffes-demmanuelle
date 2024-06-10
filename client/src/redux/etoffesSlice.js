import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	productData: [],
	userInfo: null,
};

export const etoffesSlice = createSlice({
	name: "etoffes de Manu",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.productData.find(
				(item) => item._id === action.payload._id
			);

			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.productData.push(action.payload);
			}
		},
		deleteItem: (state, action) => {
			state.productData = state.productData.filter(
				(item) => item._id !== action.payload
			);
		},
		resetCart: (state) => {
			state.productData = [];
		},
		increamentQuantity: (state, action) => {
			const item = state.productData.find(
				(item) => item._id === action.payload._id
			);
			if (item) {
				item.quantity++;
			}
		},
		decreamentQuantity: (state, action) => {
			const item = state.productData.find(
				(item) => item._id === action.payload._id
			);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		// ============ User Start ============ //
		addUser: (state, action) => {
			state.userInfo = action.payload;
		},
		removeUser: (state) => {
			state.userInfo = null;
		},
		// ============ User End ============ //
	},
});

export const {
	addToCart,
	deleteItem,
	resetCart,
	increamentQuantity,
	decreamentQuantity,
	addUser,
	removeUser,
} = etoffesSlice.actions;
export default etoffesSlice.reducer;
