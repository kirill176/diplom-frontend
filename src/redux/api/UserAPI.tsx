import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./adminAPI";
import { EMethodt } from "../../models/api";

export const UserAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: `/user`,
        method: EMethodt.GET,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUserQuery } = UserAPI;
