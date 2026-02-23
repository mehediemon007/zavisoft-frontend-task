import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from '@/types/product';

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {

            const existingItem = state.items.find(
            (item) => 
                item.id === action.payload.id && 
                item.color === action.payload.color && 
                item.size === action.payload.size
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;