import { createSlice } from '@reduxjs/toolkit';
import { updateUserProfile } from './userOperations';

const initialState = {
  profileData: { height:null, dWeight:null, age:null, bloodType:null, cWeight:null, dailyCalories:null, badFoods:[] },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateUserProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
          state.profileData.height = action.payload.height;
          state.profileData.dWeight = action.payload.dWeight;
          state.profileData.age = action.payload.age;
          state.profileData.bloodType = action.payload.bloodType;
          state.profileData.cWeight = action.payload.cWeight;
          state.profileData.dailyCalories = action.payload.dailyCalories;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

  },
});

export const userReducer = userSlice.reducer;
