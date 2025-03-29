import { Box, Typography } from "@mui/material";
import IconEmpty from "../../icons/IconEmpty";

const EmptyComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <IconEmpty />
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        No files uploaded yet
      </Typography>
    </Box>
  );
};

export default EmptyComponent;
