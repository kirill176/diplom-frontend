import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import IconLogo from "../../icons/IconLogo/IconLogo";
import useFile from "../../hooks/useFile";
import { useState } from "react";

const DownloadPage = () => {
  const { link } = useParams();
  const { downloadFile } = useFile();
  const [password, setPassword] = useState<string>("");

  const handleDownload = () => {
    downloadFile(password, link as string);
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

        <Typography variant="body1" mb={2}>
          Enter password to download your file:
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

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: 2,
            padding: "10px 0",
            fontSize: "16px",
            borderRadius: 2,
            textTransform: "none",
          }}
          onClick={handleDownload}
        >
          Download
        </Button>
      </Paper>
    </Box>
  );
};

export default DownloadPage;
