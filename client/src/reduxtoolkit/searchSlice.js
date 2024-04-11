import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  result: [],
  status: "idle",
};

export const fetchresult = createAsyncThunk("result/fetchresult", async (searchterm) => {
  const response = await axios.post("https://expresscart.onrender.com/user/searchproduct", searchterm);
  console.log("response", response);
  return response;
});

const searchSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchresult.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchresult.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.result = action.payload.data.data;
        console.log("state.result", state.result);
      })
      .addCase(fetchresult.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default searchSlice.reducer;
