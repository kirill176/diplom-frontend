import { FC } from "react";
import { Box } from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent";
import SpaceShower from "../../components/SpaceShower";
import FilesGrid from "../../components/FilesGrid";

const HomePage: FC = () => {
  return (
    <Box>
      <HeaderComponent />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <SpaceShower />
        <FilesGrid />
      </Box>
    </Box>
  );
};

export default HomePage;
