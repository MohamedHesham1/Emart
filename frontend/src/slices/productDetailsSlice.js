import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductDetailsQuery } = productDetailsSlice;
