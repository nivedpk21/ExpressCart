import { configureStore } from "@reduxjs/toolkit";
import sellerProfileSlice from "./sellerProfileSlice";
import sellerDetailsSlice from "./sellerDetailsSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    sellerprofile: sellerProfileSlice,
    sellerdetails: sellerDetailsSlice,
    result: searchSlice,
  },
});
 