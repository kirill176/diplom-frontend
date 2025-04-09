import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import IconAttention from "../../icons/IconAttention";
import "./AttentionMessage.css";

type AttentionMessageProps = {
  message: string;
};

const AttentionMessage: FC<AttentionMessageProps> = ({ message }) => {
  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === "light" ? "#fff8e1" : "#4a3f1e",
        borderRadius: "8px",
        width: "100%",
        padding: "16px",
        margin: "16px 0",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        color: theme.palette.text.primary,
        border: `1px solid ${
          theme.palette.mode === "light" ? "#ffe082" : "#705c2a"
        }`,
      })}
    >
      <IconAttention />
      <Typography variant="h6">{message}</Typography>
    </Paper>
  );
};

export default AttentionMessage;
