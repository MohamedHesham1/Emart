import { configureStore } from '@reduxjs/toolkit';
import productDetailsReducer from '../features/productDetailsSlice';
import productListReducer from '../features/productsListSlice';

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
  },
});

export default store;
