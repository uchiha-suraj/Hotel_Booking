import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchHotel = createAsyncThunk("fetchHotel", async (_id) => {
  const response = await fetch(`http://localhost:5000/hotels/${_id}`);
  return response.json();
});

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHotel.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHotel.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHotel.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  }
});

export default hotelSlice.reducer;