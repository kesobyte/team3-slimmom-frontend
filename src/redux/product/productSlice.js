import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductsByBloodType,
  searchProducts,
  fetchProductsByBloodTypeOpen,
} from './productOperation';

const initialState = {
  productsList: [],
  searchResults: [],
  isLoading: false,
  diaryEntries: [],
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsByBloodType.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByBloodType.fulfilled, (state, action) => {
        state.productsList = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProductsByBloodType.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchProductsByBloodTypeOpen.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByBloodTypeOpen.fulfilled, (state, action) => {
        state.productsList = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProductsByBloodTypeOpen.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(searchProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
