import { Box } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import FileComponent from "../FileComponent";
import { FileType } from "../../models/user";

const FileList = () => {
  const { files } = useAppSelector((state) => state.user);

  if (!files || files.length === 0) return null;

  return (
    <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridColumn: "auto",
          gridTemplateColumns: "repeat(4, 1fr)",
          alignItems: "center",
          justifyContent: "flex-start",
          alignContent: "center",
          justifyItems: "center",
          gap: "16px",
          padding: "16px 0",
        }}
      >
        {files.map((file: FileType) => (
          <FileComponent key={file._id} {...file} />
        ))}
      </Box>
    </Box>
  );
};

export default FileList;
