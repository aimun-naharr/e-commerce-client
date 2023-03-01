import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        isCartOpen: false,
        items: [],
        cart: [],
};

const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers: {
                setItem: (state, action) => {
                        state.items = action.payload;
                },

                addToCart: (state, action) => {
                        const existingProduct = state.cart.find((product) => product._id === action.payload.item._id);
                        if (existingProduct) {
				let newCart = state.cart.filter((product) => product._id !== existingProduct._id);
				existingProduct.count = existingProduct.count + 1;
				state.cart = [...newCart, existingProduct];
			} else state.cart = [...state.cart, action.payload.item];
                        
                },
                removeFromCart: (state, action) => {
                        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                },
                increaseCount: (state, action) => {
                        state.cart = state.cart.map((item) => {
                                if (item._id === action.payload._id) {
                                        item.count++;
                                }
                                return item;
                        });
                },
                decreaseCount: (state, action) => {
                        state.cart = state.cart.map((item) => {
                                if (item._id === action.payload._id && item.count > 1) {
                                        item.count++;
                                }
                                return item;
                        });
                },
                setIsCartOpen: (state) => {
                        state.isCartOpen = !state.isCartOpen;
                },
        },
});

export const { setItem, isCartOpen, increaseCount, decreaseCount, removeFromCart, addToCart, setIsCartOpen } = cartSlice.actions;
export default cartSlice.reducer;