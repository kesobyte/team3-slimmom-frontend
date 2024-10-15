import { createSlice } from '@reduxjs/toolkit';
import { updateUserProfile, getUserProfile } from './userOperations';

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
      })
      .addCase(getUserProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.profileData.height = action.payload.data.height;
        state.profileData.dWeight = action.payload.data.dWeight;
        state.profileData.age = action.payload.data.age;
        state.profileData.bloodType = action.payload.data.bloodType;
        state.profileData.cWeight = action.payload.data.cWeight;
        state.profileData.dailyCalories = action.payload.data.dailyCalories;
        state.profileData.badFoods = action.payload.notRecommended;  
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

  },
});

export const userReducer = userSlice.reducer;
