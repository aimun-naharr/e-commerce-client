import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

const store=configureStore({
     reducer: {
          cart: cartSlice,
          auth: authSlice,
          [ apiSlice.reducerPath]: apiSlice.reducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store