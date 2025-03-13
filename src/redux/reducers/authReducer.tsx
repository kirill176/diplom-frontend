import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loginned: (state) => {
      state.isAuthenticated = true;
    },
    logouted: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { loginned, logouted } = authSlice.actions;

export default authSlice.reducer;
