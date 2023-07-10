import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cartItems.find(
        (index) => index._id === newItem._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((index) =>
          index._id === existItem._id ? newItem : index
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
