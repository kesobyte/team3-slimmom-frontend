import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import moment from 'moment';
import { getToken } from '../auth/selectors';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const searchProducts = createAsyncThunk(
  'products/searchProducts',
  async (title, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/product/search?title=${title}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProductToDiary = createAsyncThunk(
  'products/addProductToDiary',
  async ({ title, grams }, { rejectWithValue }) => {
    try {
      // Get the product info
      const searchResponse = await axios.get(`/product/search?title=${title}`);

      if (searchResponse.data.length === 0) {
        return rejectWithValue('Product not found');
      }

      // Calculate the calorieIntake
      const product = searchResponse.data[0];
      const { calories, categories } = product;
      const calorieIntake = (grams * calories) / 100;

      const response = await axios.post('/diary/add', {
        date: moment().format('YYYY-MM-DD'),
        title,
        grams,
        calories,
        calorieIntake,
        category: categories,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDiaryEntries = createAsyncThunk(
  'products/fetchDiaryEntries',
  async (date, { getState, rejectWithValue }) => {
    const token = getToken(getState());

    if (!token) {
      return rejectWithValue('No authentication token found');
    }

    const formattedDate = moment(date).format('YYYY-MM-DD') + 'T00:00:00.000Z';
    try {
      const response = await axios.get(`/diary/fetch?date=${formattedDate}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'An error occurred while fetching diary entries'
      );
    }
  }
);

export const deleteDiaryEntry = createAsyncThunk(
  'products/deleteDiaryEntry',
  async (id, { getState, rejectWithValue }) => {
    const token = getToken(getState());

    if (!token) {
      return rejectWithValue('No authentication token found');
    }

    try {
      await axios.delete(`/diary/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id; // Return the id of the deleted item
    } catch (error) {
      return rejectWithValue(
        error.response?.data ||
          'An error occurred while deleting the diary entry'
      );
    }
  }
);
