import { FC } from "react";
import { Box } from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent";
import SpaceShower from "../../components/SpaceShower";
import FileButton from "../../components/FileButton";
import FileList from "../../components/FileList";
import ModalContainer from "../../components/ModalContainer";
import { useGetUser } from "../../hooks/useGetUser";

const HomePage: FC = () => {
  useGetUser();
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
            gap: "8px",
          }}
        >
          <SpaceShower />
          <FileButton />
        </Box>
        <FileList />
      </Box>
      <ModalContainer />
    </>
  );
};

export default HomePage;
