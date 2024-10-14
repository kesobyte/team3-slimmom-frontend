import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import {
  addToDiary,
  fetchDiaryEntries,
  deleteDiaryEntry,
} from './diaryOperations';

const diaryState = {
  date: moment().format('DD.MM.YYYY'),
  productsList: [],
  searchResults: [],
  selectedDate: moment().format('YYYY-MM-DD') + 'T00:00:00.000Z',
  isLoading: false,
  diaryEntries: [],
  error: null,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState: diaryState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setProducts(state, action) {
      state.productsList = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addToDiary.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToDiary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.diaryEntries.push(action.payload);
      })
      .addCase(addToDiary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchDiaryEntries.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDiaryEntries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.diaryEntries = action.payload;
      })
      .addCase(fetchDiaryEntries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteDiaryEntry.fulfilled, (state, action) => {
        state.diaryEntries = state.diaryEntries.filter(
          entry => entry._id !== action.payload
        );
      });
  },
});

export const { setDate, setProducts, setSelectedDate } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
