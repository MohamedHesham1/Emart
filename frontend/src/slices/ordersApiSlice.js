import { apiSlice } from '../slices/apiSlice';
import { ORDERS_URL } from '../constants';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    CreateOrder: builder.mutation({
      query: (order) => ({
        method: 'POST',
        url: ORDERS_URL,
        body: { ...order },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApiSlice;
