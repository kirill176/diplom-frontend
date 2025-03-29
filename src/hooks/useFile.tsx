import { useState } from "react";
import {
  useAddFileMutation,
  useGenerateLinkMutation,
  useGetFileListMutation,
  useRemoveFileMutation,
} from "../redux/api/FileAPI";
import { useAppDispatch } from "./redux";
import { refetchFiles } from "../redux/reducers/userReducer";

const useFile = () => {
  const [addFile] = useAddFileMutation();
  const [deleteFile] = useRemoveFileMutation();
  const [getFilesList] = useGetFileListMutation();
  const [generateLink] = useGenerateLinkMutation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const dispatch = useAppDispatch();

  const refetchList = async () => {
    try {
      const files = await getFilesList({}).unwrap();
      dispatch(refetchFiles(files));
    } catch (error) {
      setError("Error fetching file list");
      console.error("Error fetching file list", error);
    }
  };

  const uploadFile = async (file: File) => {
    setLoading(true);
    setError(null);
    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await addFile(formData).unwrap();
    } catch (error) {
      setError("Error loading file");
      console.error("Error loading file", error);
    } finally {
      setLoading(false);
      setFileName("");
      refetchList();
    }
  };

  const removeFile = async (id: string) => {
    try {
      console.log(id);
      await deleteFile(id);
    } catch (error) {
      setError("Error remove file");
      console.error("Error remove file", error);
    } finally {
      refetchList();
    }
  };

  const linkGeneration = async (fileId: string, password: string) => {
    try {
      const { data } = await generateLink({ fileId, password });
      setLink(data.link);
    } catch (error) {
      console.error("Error generate link", error);
    }
  };

  return {
    loading,
    error,
    fileName,
    uploadFile,
    removeFile,
    linkGeneration,
    link,
  };
};

export default useFile;
