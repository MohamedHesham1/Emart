import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../features/productsSlice';

const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});

export default store;
