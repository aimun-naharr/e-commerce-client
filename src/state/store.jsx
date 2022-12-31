import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import cartSlice from "./cartSlice";

const store=configureStore({
     reducer: {
          cart: cartSlice,
          [ apiSlice.reducerPath]: apiSlice.reducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store