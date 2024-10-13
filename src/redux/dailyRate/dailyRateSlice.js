import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { dailyRate, dailyRateById } from './dailtyRateOperations';

const initialState = {
  dailyRate: null,
  notAllowedProducts: [],
  summaries: [],
  loading: false,
  error: '',
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: builder => {
    // Without id user
    builder
      .addCase(dailyRate.pending, handlePending)
      .addCase(dailyRate.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
      })
      .addCase(dailyRate.rejected, handleRejected);

    // With id user
    builder
      .addCase(dailyRateById.pending, handlePending)
      .addCase(dailyRateById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
        state.summaries = payload.summaries;
      })
      .addCase(dailyRateById.rejected, handleRejected);
  },
});

const persistConfig = {
  key: 'watermelon/slimMom/dailyRate',
  storage,
  whitelist: ['dailyRate', 'notAllowedProducts'],
};

export const persistedDailyRateReducer = persistReducer(
  persistConfig,
  dailyRateSlice.reducer
);
