import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Fetch Products by Blood Type
export const fetchProductsByBloodType = createAsyncThunk(
  'product/fetchByBloodType',
  async (bloodType, thunkAPI) => {
    try {
      const response = await axios.get(`/product/blood-type/${bloodType}`);
      return response.data;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);

export const searchProducts = createAsyncThunk(
  'product/searchProducts',
  async (title, { rejectWithValue }) => {
    try {
      // Encode the title to handle special characters like parentheses
      const encodedTitle = encodeURIComponent(title);
      const response = await axios.get(`/product/search?title=${encodedTitle}`);
      return response.data;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      if (status === 404 && message === 'No products found') {
        toast.warning('No product found');
      }

      return rejectWithValue(error.response.data);
    }
  }
);
