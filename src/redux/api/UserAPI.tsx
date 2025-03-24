import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./adminAPI";
import { EMethod } from "../../models/api";

export const UserAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: `/user`,
        method: EMethod.GET,
      }),
    }),
  }),
});

export const { useGetUserQuery } = UserAPI;
