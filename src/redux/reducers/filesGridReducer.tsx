import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GridRows } from "../../models/menu";

const filesGridSlice = createSlice({
  name: "filesGrid",
  initialState: {
    grid: GridRows.Grid,
  },
  reducers: {
    toogleGridRow(state, action: PayloadAction<GridRows>) {
      state.grid = action.payload;
    },
  },
});

export const { toogleGridRow } = filesGridSlice.actions;

export default filesGridSlice.reducer;
