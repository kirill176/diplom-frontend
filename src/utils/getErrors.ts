import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ApiError } from "../redux/api/adminAPI";
import { SerializedError } from "@reduxjs/toolkit";

const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  return typeof error === "object" && error !== null && "status" in error;
};

const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "data" in error &&
    typeof (error as ApiError).data === "object" &&
    "message" in (error as ApiError).data
  );
};

export const getErrorMessage = (
  error: FetchBaseQueryError | ApiError | SerializedError
) => {
  if (isApiError(error)) {
    return error.data.message; // Если это `ApiError`, извлекаем `message`
  }
  if (isFetchBaseQueryError(error)) {
    return (error.data as { message?: string })?.message || "Unexpected error";
  }
  return "Unknown error";
};
