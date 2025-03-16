import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { baseUrl } from "../../constants/api";
import { AuthAPI } from "./AuthAPI";
import { redirectToLogin } from "../reducers/resirectReducer";
import { AuthRoutes } from "../../models/api";

type BaseQueryWithReauthFn = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${JSON.parse(token)}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryWithReauthFn = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);
  const { error } = result;

  console.log("Base Query Error:", error);

  if (error?.status === 401) {
    console.warn("Unauthorized: Trying to refresh token...");

    if (
      typeof args === "object" &&
      "url" in args &&
      args.url.includes(AuthRoutes.Refresh)
    ) {
      console.error("Refresh token failed. Logging out...");
      api.dispatch(redirectToLogin());
      return result;
    }

    try {
      const refreshResult = await api
        .dispatch(AuthAPI.endpoints.refresh.initiate(null))
        .unwrap();

      const { accessToken } = refreshResult;

      if (accessToken) {
        console.log("Token refreshed successfully");
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (err) {
      console.error("Refresh token failed:", err);
      api.dispatch(redirectToLogin());
    }
  }

  return result;
};

export default baseQueryWithReauth;
