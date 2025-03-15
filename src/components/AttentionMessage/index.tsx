import { Box, Typography } from "@mui/material";
import { FC } from "react";
import IconAttention from "../../icons/IconAttention";
import "./AttentionMessage.css";

type AttentionMessageProps = {
  message: string;
};

const AttentionMessage: FC<AttentionMessageProps> = ({ message }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#faf3e1",
        borderRadius: "8px",
        width: "100%",
        padding: "16px",
        margin: "16px 0",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <IconAttention />
      <Typography>{message}</Typography>
    </Box>
  );
};

export default AttentionMessage;
