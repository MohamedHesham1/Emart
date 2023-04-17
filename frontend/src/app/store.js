import { configureStore } from '@reduxjs/toolkit';
import productDetailsReducer from '../features/productDetailsSlice';
import productListReducer from '../features/productsListSlice';
import cartReducer from '../features/cartSlice';

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
});

export default store;
