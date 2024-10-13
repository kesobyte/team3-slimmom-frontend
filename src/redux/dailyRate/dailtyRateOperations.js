import { createAsyncThunk } from '@reduxjs/toolkit';
// import {authSelectors} from "../auth/authSelectors";
import { slimMomAxios } from '../slimMomAxios';

export const dailyRateById = createAsyncThunk(
  'dailyRateById/fetchData',
  async ({ userId, dataUser }, thunkAPI) => {
    // const accessToken = authSelectors.refreshToken(thunkAPI.getState());
    try {
      console.log(dataUser);
      const { data } = await slimMomAxios.post(
        `/daily-rate/${userId}`,
        dataUser
      );
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const dailyRate = createAsyncThunk(
  'dailyRate/fetchData',
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      const { data } = await slimMomAxios.post(`/daily-rate`, userData);
      console.log(data);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
