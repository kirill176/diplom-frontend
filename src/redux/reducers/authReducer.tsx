import { createSlice } from "@reduxjs/toolkit";
import { redirectToLogin } from "./resirectReducer";

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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(redirectToLogin.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.shouldRedirect = false;
    });
  },
});

export const { loginned, logouted } = authSlice.actions;

export default authSlice.reducer;
