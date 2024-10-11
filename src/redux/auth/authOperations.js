import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Provided API from .env
axios.defaults.baseURL =
  'https://goit-slimmom-team-03-d472951ab141.herokuapp.com/api';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to delete JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Register
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      const { accessToken, refreshToken } = response.data;

      // Save the token
      setAuthHeader(accessToken);

      // Dispatch getCurrentUser to fetch user data after login
      thunkAPI.dispatch(getCurrentUser());

      return { token: accessToken, refreshToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Logout
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  try {
    setAuthHeader(token);
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Refresh User
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/auth/refresh');
      const { user, token } = response.data;
      setAuthHeader(token);
      return { user, token };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Verify Email
export const verifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  async (verificationToken, thunkAPI) => {
    try {
      const response = await axios.get(`/auth/${verificationToken}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Resend Verify Email
export const resendVerifyEmail = createAsyncThunk(
  'auth/resendVerifyEmail',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('/auth/verify', { email });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Current User
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/auth/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
