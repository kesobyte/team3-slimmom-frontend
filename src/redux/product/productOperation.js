import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '../auth/selectors';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Fetch Products by Blood Type
export const fetchProductsByBloodTypePrivate = createAsyncThunk(
  'product/fetchByBloodTypePrivate',
  async (bloodType, thunkAPI) => {
    const token = getToken(thunkAPI.getState());
    if (!token) return thunkAPI.rejectWithValue('No token found');

    try {
      const response = await axios.get(`/product/blood-type/${bloodType}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);

export const fetchProductsByBloodTypePublic = createAsyncThunk(
  'product/fetchByBloodTypePublic',
  async (bloodType, thunkAPI) => {

    try {
      const response = await axios.get(`/product/blood-type/${bloodType}`);
      return response.data.data;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);



// Search Products by Title
// export const searchProducts = createAsyncThunk(
//   'product/search',
//   async (title, thunkAPI) => {
//     const token = getToken(thunkAPI.getState());
//     if (!token) return thunkAPI.rejectWithValue('No token found');

//     try {
//       const response = await axios.get(`/product/search`, {
//         params: { title },
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     } catch (error) {
//       const status = error.response?.status;
//       const message = error.response?.data?.message || error.message;
//       return thunkAPI.rejectWithValue({ status, message });
//     }
//   }
// );

export const searchProducts = createAsyncThunk(
  'product/searchProducts',
  async (title, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/product/search?title=${title}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
