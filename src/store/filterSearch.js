import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onSaveFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const FilterActions = filterSlice.actions;
