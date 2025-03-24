import { FC } from "react";
import { Box } from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent";
import SpaceShower from "../../components/SpaceShower";
import FilesGrid from "../../components/FilesGrid";
import FileButton from "../../components/FileButton";
import FileList from "../../components/FileList";
import ModalContainer from "../../components/ModalContainer";

const HomePage: FC = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "auto",
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <HeaderComponent />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SpaceShower />
          <FilesGrid />
        </Box>
        <FileButton />
        <FileList />
      </Box>
      <ModalContainer />
    </>
  );
};

export default HomePage;
