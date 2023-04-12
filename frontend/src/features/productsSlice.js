import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  loading: false,
  error: '',
};

export const fetchProducts = createAsyncThunk(
  '/api/products',
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get('/api/products');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = '';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = action.error.message;
    });
  },
});

export default productListSlice.reducer;
export const { request, success, error } = productListSlice.actions;
