import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import IconLogo from "../../icons/IconLogo/IconLogo";
import { saveAs } from "file-saver";
import { useState } from "react";
import { useDownloadFileMutation } from "../../redux/api/FileAPI";
import { getErrorMessage } from "../../utils/getErrors";

const DownloadPage = () => {
  const { filename, link } = useParams();
  const [download, { isLoading, error }] = useDownloadFileMutation();
  const [password, setPassword] = useState<string>("");

  const downloadFile = async () => {
    const result = await download({ password, link }).unwrap();
    saveAs(result, filename);
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 480,
          minWidth: 400,
          padding: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <IconLogo />
          <Typography variant="h4" fontWeight="bold" color="primary">
            Cloud Disk
          </Typography>
        </Box>

        <Typography variant="body1" mb={2} sx={{ textAlign: "center" }}>
          Enter password to download this file:
        </Typography>

        <TextField
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
        {error && (
          <Typography
            variant="body2"
            color="error"
            style={{ marginTop: "10px" }}
          >
            Error: {getErrorMessage(error)}
          </Typography>
        )}
        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: 2,
            padding: "10px 0",
            fontSize: "16px",
            borderRadius: 2,
          }}
          disabled={isLoading}
          onClick={downloadFile}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Download File"
          )}
        </Button>
      </Paper>
    </Box>
  );
};

export default DownloadPage;
