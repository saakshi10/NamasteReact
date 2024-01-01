import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        // 'name' of the slice: slice
        cart: cartSlice,
    },
});

export default store;
