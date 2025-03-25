import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useFile from "../../hooks/useFile";
import { ChangeEvent } from "react";

const FileButton = () => {
  const { loading, error, fileName, uploadFile } = useFile();

  const handleUpladFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    uploadFile(file);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        padding: "16px 0",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {fileName && (
        <Typography variant="body2" color="textSecondary">
          Selected file: {fileName}
        </Typography>
      )}

      <Button
        variant="contained"
        component="label"
        disabled={loading}
        sx={{ minWidth: "115px", minHeight: "45px" }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Upload File"
        )}
        <input type="file" hidden onChange={handleUpladFile} />
      </Button>

      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: "10px" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default FileButton;
