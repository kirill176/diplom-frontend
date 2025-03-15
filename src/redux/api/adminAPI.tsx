import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { baseUrl } from "../../constants/api";
import { AuthAPI } from "./AuthAPI";
import { redirectToLogin } from "../reducers/resirectReducer";

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
  let result = await baseQuery(args, api, extraOptions);
  const { error } = result;

  if (error?.status === 401) {
    console.warn("refresh token");

    const refreshResult = await api
      .dispatch(AuthAPI.endpoints.refresh.initiate({}))
      .unwrap()
      .catch((err) => {
        console.error(err);
        return null;
      });

    if (refreshResult) {
      const { accessToken } = refreshResult;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));

      result = await baseQuery(args, api, extraOptions);
    } else {
      console.warn("refresh failed");
      api.dispatch(redirectToLogin());
    }
  }

  return result;
};

export default baseQueryWithReauth;
