import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/ItemSlice";

const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});

export default store;
