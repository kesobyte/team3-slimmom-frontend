import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://slimmom-backend-du1t.onrender.com/api',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),

  endpoints: builder => ({
    registerUser: builder.mutation({
      query: user => ({
        url: `/users/signup`,
        method: 'POST',
        body: user,
      }),
    }),

    logInUser: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      headers: {
        authorization: '',
      },
    }),

    getUser: builder.query({
      query: a => `/users/current${a}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetUserQuery,
} = authApi;