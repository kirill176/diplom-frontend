import { createApi } from "@reduxjs/toolkit/query/react";
import { EMethod, FileRoutes } from "../../models/api";
import baseQueryWithReauth from "./adminAPI";

export const FileAPI = createApi({
  reducerPath: "file",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    addFile: build.mutation({
      query: (body) => ({
        url: `/${FileRoutes.UploadFile}`,
        method: EMethod.POST,
        body,
      }),
    }),
    removeFile: build.mutation({
      query: (id) => ({
        url: `/${FileRoutes.RemoveFile}`,
        method: EMethod.POST,
        body: { id },
      }),
    }),
    getFileList: build.mutation({
      query: () => ({
        url: `/${FileRoutes.GetFiles}`,
        method: EMethod.GET,
      }),
    }),
    generateLink: build.mutation({
      query: (body) => ({
        url: `/${FileRoutes.GenerateLink}`,
        method: EMethod.POST,
        body,
      }),
    }),
    deactivateLink: build.mutation({
      query: (body) => ({
        url: `/${FileRoutes.DeactivateLink}`,
        method: EMethod.POST,
        body,
      }),
    }),
    downloadFile: build.mutation({
      query: (body) => ({
        url: `/${FileRoutes.DownloadFile}`,
        method: EMethod.POST,
        body,
        responseHandler: async (response: Response) => {
          if (!response.ok) {
            return await response.json();
          }
          return response.blob();
        },
      }),
      transformResponse: (response: Blob) => URL.createObjectURL(response),
    }),
  }),
});

export const {
  useAddFileMutation,
  useRemoveFileMutation,
  useGetFileListMutation,
  useGenerateLinkMutation,
  useDownloadFileMutation,
  useDeactivateLinkMutation,
} = FileAPI;
