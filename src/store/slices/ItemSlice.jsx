import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export default itemSlice.reducer;

export const { addItem, deleteItem } = itemSlice.actions;
