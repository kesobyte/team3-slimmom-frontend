import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '../auth/selectors';

export const updateUserProfile = createAsyncThunk(
  'user/updateProfile',
  async (
    { height, dWeight, age, bloodType, cWeight, dailyCalories },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put('/profile/update', {
        height,
        dWeight,
        age,
        bloodType,
        cWeight,
        dailyCalories,
      });
        //console.log(response.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'user/getProfile',
  async (_, thunkAPI) => {
    const token = getToken(thunkAPI.getState());
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      const response = await axios.get('/profile/fetch', {
        headers: { Authorization: `Bearer ${token}` },
      });
      //console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'An error occurred'
      );
    }
  }
);