import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refreshUser,
  resendVerifyEmail,
} from './authOperations';

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
        localStorage.removeItem('persist:auth');
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
        localStorage.removeItem('persist:auth');
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = payload;
        state.token = null;
        state.refreshToken = null;
        state.user = null;
        state.isLoggedIn = false;
        localStorage.removeItem('persist:auth');
      })
      .addCase(resendVerifyEmail.pending, state => {
        state.isLoading = true;
      })
      .addCase(resendVerifyEmail.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resendVerifyEmail.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
