import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./adminAPI";
import { AuthRoutes, EMethodt } from "../../models/api";

export const AuthAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: `/${AuthRoutes.Login}`,
        method: EMethodt.POST,
        body,
        credentials: "include",
      }),
    }),
    registration: build.mutation({
      query: (body) => ({
        url: `${AuthRoutes.Registration}`,
        method: EMethodt.POST,
        body,
        credentials: "include",
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: `${AuthRoutes.Logout}`,
        method: EMethodt.POST,
        credentials: "include",
      }),
    }),
    refresh: build.mutation({
      query: () => ({
        url: `/${AuthRoutes.Refresh}`,
        method: EMethodt.GET,
        credentials: "include",
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
