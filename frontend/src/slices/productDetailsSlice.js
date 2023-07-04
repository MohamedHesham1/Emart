import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetails = createAsyncThunk(
  '/api/products/:id',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: { product: { reviews: [] }, loading: false, httpError: '' },
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.httpError = '';
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.httpError = action.payload;
    });
  },
});

export default productDetailsSlice.reducer;
