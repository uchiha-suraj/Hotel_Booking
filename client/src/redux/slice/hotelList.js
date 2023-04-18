import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchHotelList = createAsyncThunk("fetchHotelList", async () => {
  // http://localhost:5000/hotels
  const response = await fetch("https://hotel-booking-8zdc.onrender.com/hotels");
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