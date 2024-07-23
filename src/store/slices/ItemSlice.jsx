import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {},
  },
});

export default itemSlice.reducer;

export const { addItem } = itemSlice.actions;
