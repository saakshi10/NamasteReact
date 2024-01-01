import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        // addItems -> name of action to be dispatched
        // the corresponding function is the reducer function to be executed
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // pop element
        },
        clearCart: (state, action) => {
            state.items = [];
        },
    },
    selectors: {},
});

export const { addItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

//  cartSlice is like a big Object
//  it will have reducer and action
//  cartSlice = {
//     actions: {
//         addItems,
//         clearCart
//     }
//     reducer: reducers
//  }
