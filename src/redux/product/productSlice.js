import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductsByBloodTypePrivate,
  searchProducts,
  fetchProductsByBloodTypePublic,
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
      .addCase(fetchProductsByBloodTypePrivate.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByBloodTypePrivate.fulfilled, (state, action) => {
        state.productsList = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProductsByBloodTypePrivate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchProductsByBloodTypePublic.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByBloodTypePublic.fulfilled, (state, action) => {
        state.productsList = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProductsByBloodTypePublic.rejected, (state, action) => {
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
