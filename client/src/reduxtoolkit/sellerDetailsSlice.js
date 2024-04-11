import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
};

export const fetchdetails = createAsyncThunk("sellerdetails/get", async () => {
  const data = await axios.get("http:localhost:4000/admin/sellerdetails");
  console.log("response", data);
  return data;
});

export const sellerDetailsSlice = createSlice({
  name: "sellerdetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchdetails.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.status = "idle";
      })
      .addCase(fetchdetails.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default sellerDetailsSlice.reducer;
