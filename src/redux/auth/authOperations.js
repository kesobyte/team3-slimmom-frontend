import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

// Provided API from .env
// axios.defaults.baseURL =
//   'https://goit-slimmom-team-03-d472951ab141.herokuapp.com/api';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.baseURL = process.env.REACT_APP_LOCAL_API_URL;

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to delete JWT
const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

// Utility to schedule token refresh
let refreshTimeout;
const scheduleTokenRefresh = (token, dispatch) => {
  if (refreshTimeout) clearTimeout(refreshTimeout);

  try {
    const { exp } = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    const timeUntilExpiry = exp - currentTime;

    if (timeUntilExpiry <= 0) {
      // Token expired, log out the user
      dispatch(logout());
      return;
    }

    // Schedule refresh 1 minute before expiry
    const refreshTime = Math.max(timeUntilExpiry - 60, 0) * 1000;

    refreshTimeout = setTimeout(() => {
      dispatch(refreshUser());
    }, refreshTime);
  } catch (error) {
    console.error('Error decoding JWT', error);
    dispatch(logout());
  }
};

// Register
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', credentials);
      setAuthHeader(response.data.token);
      toast.success('Account created successfully!');
      return response.data;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      if (status === 409) {
        toast.error('Email is already in use.');
      }

      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);

// Login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      const { user, accessToken, refreshToken } = response.data;

      // // Check if the user is verified
      // if (!user.verified) {
      //   toast.error('Please verify your email before logging in.');
      //   return thunkAPI.rejectWithValue({
      //     status: 403,
      //     message: 'Email not verified',
      //   });
      // }

      setAuthHeader(accessToken);
      scheduleTokenRefresh(accessToken, thunkAPI.dispatch);
      return { user, token: accessToken, refreshToken };
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      if (status === 401) {
        toast.error('Invalid credentials, please try again.');
      }

      return thunkAPI.rejectWithValue({ status, message });
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
    clearTimeout(refreshTimeout);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Refresh User
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;

    if (!refreshToken) {
      return thunkAPI.rejectWithValue('No refresh token found');
    }

    try {
      const response = await axios.post('/auth/refresh', { refreshToken });
      const {
        user,
        accessToken,
        refreshToken: newRefreshToken,
      } = response.data;

      setAuthHeader(accessToken);
      scheduleTokenRefresh(accessToken, thunkAPI.dispatch);

      return { user, token: accessToken, refreshToken: newRefreshToken };
    } catch (error) {
      // Handle refresh token expiration
      if (error.response?.status === 401) {
        thunkAPI.dispatch(logout());
      }

      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
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
