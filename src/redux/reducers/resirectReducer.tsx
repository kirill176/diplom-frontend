import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthAPI } from "../api/AuthAPI";

export const redirectToLogin = createAsyncThunk(
  "auth/redirectToLogin",
  async (_, { dispatch }) => {
    dispatch(AuthAPI.endpoints.logout.initiate({}));
    localStorage.removeItem("accessToken");
    dispatch({ type: "NAVIGATE_TO_LOGIN" });
  }
);
