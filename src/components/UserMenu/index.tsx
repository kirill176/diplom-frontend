import { Box, Button, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/AuthAPI";
import { useClickOutside } from "../../hooks/useClickOutside";
import { FC } from "react";
import IconProfile from "../../icons/IconProfile/IconProfile";
import IconLogout from "../../icons/IconLogout/IconLogout";
import { useAppDispatch } from "../../hooks/redux";
import { logoutUser } from "../../redux/reducers/userReducer";
import { logouted } from "../../redux/reducers/authReducer";
import { MenuProps } from "../../models/menu";
import "./UserMenu.css";

const UserMenu: FC<MenuProps> = ({ setIsShow }) => {
  const [logout] = useLogoutMutation();
  const ref = useClickOutside(() => setIsShow(false));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout({});
    dispatch(logoutUser());
    dispatch(logouted());
    navigate("/login");
  };

  return (
    <Box
      ref={ref}
      className="user-menu"
      sx={{
        position: "absolute",
        top: "100%",
        right: "0%",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "background.paper",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        width: "200px",
        overflow: "hidden",
      }}
    >
      <Box component="span" sx={{ display: "flex", flexDirection: "column" }}>
        <List sx={{ padding: 0, margin: 0 }}>
          <ListItem className="list-item">
            <Button
              sx={{
                textDecoration: "none",
                display: "flex",
                gap: "8px",
                color: "text.secondary",
                alignItems: "center",
                padding: "0 8px",
                width: "100%",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => navigate("/profile")}
            >
              <IconProfile />
              Profile
            </Button>
          </ListItem>
          <ListItem className="list-item">
            <Button
              onClick={handleLogout}
              sx={{
                textDecoration: "none",
                display: "flex",
                color: "text.secondary",
                gap: "8px",
                alignItems: "center",
                padding: "0 8px",
                width: "100%",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <IconLogout />
              Logout
            </Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default UserMenu;
