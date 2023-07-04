import { configureStore } from '@reduxjs/toolkit';
import productDetailsReducer from '../slices/productDetailsSlice';
import productListReducer from '../slices/productsListSlice';
import cartReducer from '../slices/cartSlice';

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
});

export default store;
