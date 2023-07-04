import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  '/api/products',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/products');
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const productListSlice = createSlice({
  name: 'productList',
  initialState: { products: [], loading: false, httpError: '' },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.httpError = '';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.httpError = action.payload;
    });
  },
});

export default productListSlice.reducer;
