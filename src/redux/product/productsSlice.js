import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { searchProducts , addProductToDiary ,fetchDiaryEntries,deleteDiaryEntry } from './productsOperations';

const productsState = {
  date: moment().format("DD.MM.YYYY"),
  productsList: [],
  searchResults: [],
  selectedDate: moment().format('YYYY-MM-DD') + 'T00:00:00.000Z',
  isLoading: false,
  diaryEntries: [],
  error: null,
}

const productsSlice = createSlice({
  name: "products",
  initialState: productsState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload
    },
    setProducts(state, action) {
      state.productsList = action.payload
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
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
      }).addCase(addProductToDiary.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addProductToDiary.fulfilled, (state, action) => {
          state.isLoading = false;
          state.diaryEntries.push(action.payload);
        })
        .addCase(addProductToDiary.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }) .addCase(fetchDiaryEntries.pending, (state) => {
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
          state.diaryEntries = state.diaryEntries.filter(entry => entry._id !== action.payload);
        });
  },
});

export const { setDate, setProducts ,setSelectedDate } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;