import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./slices/ItemSlice";

const store = configureStore({
  items: ItemSlice,
});

export default store;
