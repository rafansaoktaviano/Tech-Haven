import { configureStore } from "@reduxjs/toolkit";
import orderSliceReducer from "../Features/order";
import userSlice from "../Features/auth";

export const store = configureStore({
  reducer: {
    order: orderSliceReducer,
    user: userSlice,
  },
});
