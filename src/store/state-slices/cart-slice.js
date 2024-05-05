import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        value: 0,
        totalQuantity: 0
    },
    reducers: {
        replaceCart: (state, action) => {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },

        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(i => i.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else {
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart: (state, action) => {
            const itemToRemove = action.payload;
            const existingItem = state.items.find(i => i.id === itemToRemove.id);
            state.totalQuantity--;

            if(existingItem.quantity === 1) {
                state.items = state.items.filter(i => i.id !== itemToRemove.id);
            }
            else {
                existingItem.quantity -= 1;
                existingItem.totalPrice = existingItem.totalPrice - itemToRemove.price;
            }

        }
    },
});

export const { addItemToCart, removeItemToCart, replaceCart } = cartSlice.actions;

export default cartSlice.reducer;