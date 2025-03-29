import { createSlice } from "@reduxjs/toolkit";
import { redirectToLogin } from "./redirectReducer";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    shouldRedirect: false,
  },
  reducers: {
    loginned: (state) => {
      state.isAuthenticated = true;
    },
    logouted: (state) => {
      state.isAuthenticated = false;
      localStorage.clear();
    },
    resetRedirect: (state) => {
      state.shouldRedirect = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(redirectToLogin.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.shouldRedirect = true;
    });
  },
});

export const { loginned, logouted, resetRedirect } = authSlice.actions;

export default authSlice.reducer;
