import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { baseUrl } from "../../constants/api";
import { AuthAPI } from "./AuthAPI";

type BaseQueryWithReauthFn = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
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

  if (error && error.status === 401) {
    const refreshResult = await api
      .dispatch(AuthAPI.endpoints.refresh.initiate(args))
      .unwrap();

    if (refreshResult && refreshResult.data) {
      const {
        data: { accessToken },
      } = refreshResult;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
    }
  }

  return result;
};

export default baseQueryWithReauth;
