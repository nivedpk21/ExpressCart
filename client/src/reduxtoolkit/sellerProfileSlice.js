import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
};

export const fetchData = createAsyncThunk(
  "sellerprofiledata/get",
  async () => {
    const response = await axios.get(
      "http://localhost:4000/admin/sellerprofile"
    );
    console.log("response", response);
    return response;
  }
);

export const sellerProfileSlice = createSlice({
  name: "sellerprofile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload.data.data;
        state.status = "idle";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default sellerProfileSlice.reducer;
