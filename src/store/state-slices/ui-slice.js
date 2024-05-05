import { createSlice } from '@reduxjs/toolkit';

export const UISlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: true},
    reducers: {
        toggle: (state) => {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const {toggle} = UISlice.actions;

export default UISlice.reducer;