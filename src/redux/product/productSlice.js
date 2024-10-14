import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsByBloodType, searchProducts } from './productOperation';

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
      .addCase(fetchProductsByBloodType.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProductsByBloodType.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
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
