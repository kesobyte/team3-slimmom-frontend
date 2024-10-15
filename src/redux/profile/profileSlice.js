import { createSlice } from '@reduxjs/toolkit';
import { updateProfile, fetchProfile } from './profileOperations';

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.isLoading = true;
        state.profile = null;
      })
      .addCase(fetchProfile.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.profile = null;
      })
      .addCase(updateProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const profileReducer = profileSlice.reducer;
