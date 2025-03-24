import { Box, List, ListItem, Typography } from "@mui/material";
import IconLink from "../../icons/IconLink";
import IconDelete from "../../icons/IconDelete";
import { FC } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./FileMenu.css";
import { ModalType } from "../../models/modal";
import { useAppDispatch } from "../../hooks/redux";
import { setFileId } from "../../redux/reducers/fileOperationReducer";
import { openModal } from "../../redux/reducers/modalReducer";

type FileMenuProps = {
  setIsShow: (param: boolean) => void;
  id: string;
  name: string;
};

const FileMenu: FC<FileMenuProps> = ({ setIsShow, id, name }) => {
  const ref = useClickOutside(() => setIsShow(false));
  const dispatch = useAppDispatch();

  const handleMenuClick = (type: ModalType) => {
    dispatch(setFileId({ id, name }));
    dispatch(openModal(type));
  };

  return (
    <Box
      className="file-menu"
      ref={ref}
      sx={{
        position: "absolute",
        top: "100%",
        right: "0",
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      <List sx={{ textWrap: "nowrap" }}>
        <ListItem
          className="list-item"
          onClick={() => handleMenuClick(ModalType.Generate)}
        >
          <IconLink />
          <Typography variant="caption" color="text.secondary">
            Generate link
          </Typography>
        </ListItem>
        <ListItem
          className="list-item"
          onClick={() => handleMenuClick(ModalType.Delete)}
        >
          <IconDelete />
          <Typography variant="caption" color="text.secondary">
            Delete
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default FileMenu;
