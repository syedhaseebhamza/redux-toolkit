import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addItem(state, action) {},
    deleteItem(state, action) {},
  },
});

export default itemSlice.reducer;
