import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
//import { getToken } from '../auth/selectors';

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
        console.log(response.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);