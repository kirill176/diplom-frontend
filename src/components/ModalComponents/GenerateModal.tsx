import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { ModalProps } from "../../models/modal";
import { FC, FormEvent, useState } from "react";
import IconCopy from "../../icons/IconCopy";
import useFile from "../../hooks/useFile";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const GenerateModal: FC<ModalProps> = ({ id, closeModal }) => {
  const [password, setPassword] = useState<string>("");
  const [expDate, setExpDate] = useState<Date | null>(() => {
    const now = new Date();
    now.setHours(now.getHours() + 24);
    return now;
  });
  const { linkGeneration, link } = useFile();
  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    linkGeneration(id, password, expDate);
    console.log(expDate);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <Box
      component="form"
      onSubmit={handleGenerate}
      sx={{
        padding: "16px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Expiration Date"
            value={expDate}
            minDate={new Date()}
            onChange={(date) => setExpDate(date)}
          />
        </LocalizationProvider>
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
              maxWidth: "300px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "8px",
              padding: "0 8px",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                whiteSpace: "nowrap",
                overflow: "scroll",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {link}
            </Typography>
            <IconButton sx={{ width: "40px" }} onClick={handleCopy}>
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
          type="submit"
          sx={{
            color: "background.paper",
            fontWeight: 600,
            textTransform: "capitalize",
            "&:hover": { color: "text.primary" },
          }}
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
