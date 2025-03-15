import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "user",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
