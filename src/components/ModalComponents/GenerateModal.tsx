import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { ModalProps } from "../../models/modal";
import { FC, useState } from "react";
import IconCopy from "../../icons/IconCopy";
import useFile from "../../hooks/useFile";

const GenerateModal: FC<ModalProps> = ({ id, name, closeModal }) => {
  const [password, setPassword] = useState<string>("");
  const { linkGeneration, link } = useFile();
  const handleGenerate = () => {
    linkGeneration(id, password);
  };

  return (
    <Box
      sx={{
        padding: "16px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <TextField
          label="File password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{ width: "100%" }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography sx={{ textWrap: "nowrap" }}>Generated Link: </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "16px",
              padding: "0 8px",
            }}
          >
            <Typography sx={{ width: "100%" }}>{link}</Typography>
            <IconButton sx={{ width: "40px" }}>
              <IconCopy />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          justifyContent: "flex-end",
          paddingTop: "16px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "background.paper",
            fontWeight: 600,
            textTransform: "capitalize",
            "&:hover": { color: "text.primary" },
          }}
          onClick={handleGenerate}
          disabled={password.length === 0}
        >
          Generate
        </Button>
        <Button
          variant="outlined"
          sx={{
            fontWeight: 600,
            textTransform: "capitalize",
            borderColor: "divider",
            "&:hover": { borderColor: "text.primary", color: "text.primary" },
          }}
          onClick={closeModal}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default GenerateModal;
