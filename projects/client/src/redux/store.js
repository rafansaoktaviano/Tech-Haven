import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/auth";
import  orderSlice  from "./Features/order";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderSlice,
  },
});
