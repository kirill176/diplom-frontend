import { Box, Button } from "@mui/material";
import IconGrid from "../../icons/IconGrid";
import IconList from "../../icons/IconList";
import "./FlexGrid.css";
import { useState } from "react";

const FilesGrid = () => {
  const [selected, setSelected] = useState(true);

  return (
    <Box
      className="files-grid"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
        borderRadius: "12px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Button
        variant="contained"
        sx={{
          minWidth: 40,
          height: 40,
          backgroundColor: selected ? "#0F62FE" : "#ffffff",
          color: "#333",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
        onClick={() => setSelected(true)}
      >
        <IconGrid />
      </Button>
      <Button
        variant="contained"
        sx={{
          minWidth: 40,
          height: 40,
          backgroundColor: "#ffffff",
          color: "#333",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <IconList />
      </Button>
    </Box>
  );
};

export default FilesGrid;
