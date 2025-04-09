import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import IconClose from "../../icons/IconClose";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import getModalConfig from "../../config/mofalConfig";
import { resetModal } from "../../redux/reducers/modalReducer";

const ModalContainer = () => {
  const { type } = useAppSelector((state) => state.modal);
  const { id, name } = useAppSelector((state) => state.fileId);
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setIsShow(false);
    dispatch(resetModal());
  };

  useEffect(() => {
    if (type) {
      setIsShow(true);
    }
  }, [type]);

  const [component, title] = getModalConfig({
    type,
    id,
    name,
    closeModal,
  });

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot || !component) return null;

  return createPortal(
    <>
      {isShow && (
        <Box
          sx={(theme) => ({
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: theme.palette.background.paper,
            width: "500px",
            borderRadius: "12px",
            padding: "16px",
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
          })}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid",
              borderColor: "divider",
              padding: "12px 20px",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              {title as string}
            </Typography>
            <IconButton
              sx={{
                width: "36px",
                height: "36px",
                color: "text.secondary",
                "&:hover": { color: "text.primary" },
              }}
              onClick={closeModal}
            >
              <IconClose />
            </IconButton>
          </Box>
          <Suspense fallback={<CircularProgress />}>{component}</Suspense>
        </Box>
      )}
    </>,
    modalRoot
  );
};

export default ModalContainer;
