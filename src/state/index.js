import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        isCartOpen: false,
        items: [],
        cart: [],
};

export const cartSlice = createSlice({
        name: "cart".initialState,
        reducers: {
                setItem: (state, action) => {
                        state.items = action.payload;
                },
                addToCart: (state, action) => {
                        state.cart = [...state.cart, action.payload];
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
                                if (item._id === action.payload._id && item.count >1) {
                                        item.count++;
                                }
                                return item;
                        });
                },
                setIsCartOpen: (state, action)=>{
                    state.isCartOpen= !state.isCartOpen
                }
        },
});

export const { setItem, isCartOpen, increaseCount, decreaseCount, removeFromCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
