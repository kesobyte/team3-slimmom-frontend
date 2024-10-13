import {createSlice} from "@reduxjs/toolkit";
import authOperations from "./authOperations";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";

const initialState = {
  user: {username: null, email: null},
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, {payload}) => {
        state.user = payload.user;
      })
      .addCase(authOperations.logIn.fulfilled, (state, {payload}) => {
        state.user.username = payload['user']['username'];
        state.user.email = payload['user']['email'];
        state.accessToken = payload['accessToken'];
        state.refreshToken = payload['refreshToken'];
        state.sid = payload['sid'];
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user.username = initialState.username;
        state.accessToken = initialState.accessToken;
        state.refreshToken = initialState.refreshToken;
        state.sid = initialState.sid;
        state.isLoggedIn = initialState.isLoggedIn;
      })
      .addCase(authOperations.refresh.fulfilled, (state, {payload}) => {
        state.accessToken = payload['newAccessToken'];
        state.refreshToken = payload['newRefreshToken'];
        state.sid = payload['sid'];
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
  }
})

const persistConfig = {
  key: 'watermelon/slimMom',
  storage,
  // whitelist: ['token'],
}

export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)
