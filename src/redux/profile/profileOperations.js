import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '../auth/selectors';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Update Profile
export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (
    { height, dWeight, age, bloodType, cWeight, dailyCalories },
    { getState, rejectWithValue }
  ) => {
    const token = getToken(getState());
    if (!token) {
      return rejectWithValue('No token found');
    }

    try {
      const response = await axios.put(
        '/profile/update',
        {
          height,
          dWeight,
          age,
          bloodType,
          cWeight,
          dailyCalories,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get Current Profile
export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, thunkAPI) => {
    const token = getToken(thunkAPI.getState());
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      const response = await axios.get('/profile/fetch', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      const status = error.response?.status;

      if (status === 404) {
        return thunkAPI.rejectWithValue(
          'Profile not found. Please calculate your daily calorie intake.'
        );
      } else {
        return thunkAPI.rejectWithValue(
          'An error occurred while fetching the profile. Please try again later.'
        );
      }
    }
  }
);
