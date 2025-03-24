import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./adminAPI";
import { AuthRoutes, EMethod } from "../../models/api";

export const AuthAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: `/${AuthRoutes.Login}`,
        method: EMethod.POST,
        body,
      }),
    }),
    registration: build.mutation({
      query: (body) => ({
        url: `${AuthRoutes.Registration}`,
        method: EMethod.POST,
        body,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: `${AuthRoutes.Logout}`,
        method: EMethod.POST,
      }),
    }),
    refresh: build.mutation({
      query: () => ({
        url: `/${AuthRoutes.Refresh}`,
        method: EMethod.GET,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useLogoutMutation,
  useRefreshMutation,
} = AuthAPI;
