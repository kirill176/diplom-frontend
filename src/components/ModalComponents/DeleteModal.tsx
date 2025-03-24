import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { ModalProps } from "../../models/modal";
import { useAppDispatch } from "../../hooks/redux";
import { resetFileId } from "../../redux/reducers/fileOperationReducer";
import useFile from "../../hooks/useFile";

const DeleteModal: FC<ModalProps> = ({ id, name, closeModal }) => {
  const { removeFile } = useFile();
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    removeFile(id);
    closeModal();
    dispatch(resetFileId());
  };

  return (
    <Box
      sx={{
        padding: "16px",
        width: "100%",
      }}
    >
      <Typography
        sx={{ fontWeight: "600", fontSize: "16px", marginBottom: "8px" }}
      >
        Are you sure you want to delete the file:
      </Typography>

      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "14px",
          maxWidth: "100%",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          color: "text.primary",
        }}
      >
        {name}
      </Typography>

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
            backgroundColor: "error.main",
            "&:hover": { backgroundColor: "error.dark" },
            color: "background.paper",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
          onClick={handleDelete}
        >
          Delete
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

export default DeleteModal;
