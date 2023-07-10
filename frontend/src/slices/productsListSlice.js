import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});
export const { useGetProductsQuery } = productsListSlice;
