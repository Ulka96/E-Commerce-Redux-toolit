import { configureStore } from "@reduxjs/toolkit";

// Slices

import categorySlice from "./slices/categories.slice";
import colorSlice from "./slices/colors.slice";
import sizeSlice from "./slices/size.slice";
import cartSlice from "./slices/cart.slice";

const store = configureStore({
reducer: {
categories: categorySlice.reducer,
colors: colorSlice.reducer,
sizes: sizeSlice.reducer,
cart: cartSlice.reducer
}
})

export default store 