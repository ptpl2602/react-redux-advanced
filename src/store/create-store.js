import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './state-slices/cart-slice.js';
import uiReducer from './state-slices/ui-slice.js';

const store = configureStore({
    reducer: {
        cart : cartReducer,
        ui: uiReducer,
    }
});

export default store;