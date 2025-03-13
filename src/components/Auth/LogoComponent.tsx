import { Box, Typography } from "@mui/material";
import IconLogo from "../../icons/IconLogo/IconLogo";

const LogoComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <IconLogo />
      <Typography variant="h2">Cloud disk</Typography>
    </Box>
  );
};

export default LogoComponent;
