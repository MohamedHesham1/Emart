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

    GetOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery } =
  ordersApiSlice;
