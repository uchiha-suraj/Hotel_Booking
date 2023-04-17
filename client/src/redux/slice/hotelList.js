import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchHotelList = createAsyncThunk("fetchHotelList", async () => {
  const response = await fetch("http://localhost:5000/hotels");
  return response.json();
});

const hotelListSlice = createSlice({
  name: "hotelList",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHotelList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHotelList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHotelList.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  }
});

export default hotelListSlice.reducer;