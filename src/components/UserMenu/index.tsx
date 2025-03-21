import { Box, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/AuthAPI";
import { useClickOutside } from "../../hooks/useClickOutside";
import { FC } from "react";
import IconProfile from "../../icons/IconProfile/IconProfile";
import IconLogout from "../../icons/IconLogout/IconLogout";
import "./UserMenu.css";
import { useAppDispatch } from "../../hooks/redux";
import { logoutUser } from "../../redux/reducers/userReducer";
import { logouted } from "../../redux/reducers/authReducer";

type UserMenuProps = {
  setIsShow: (param: boolean) => void;
};

const UserMenu: FC<UserMenuProps> = ({ setIsShow }) => {
  const [logout] = useLogoutMutation();
  const ref = useClickOutside(() => setIsShow(false));
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout({});
    dispatch(logoutUser());
    dispatch(logouted());
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        top: "100%",
        right: "0%",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        width: "200px",
        overflow: "hidden",
      }}
    >
      <Box component="span" sx={{ display: "flex", flexDirection: "column" }}>
        <List sx={{ padding: 0, margin: 0 }}>
          <ListItem
            className="list-item"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              },
              fontWeight: "bold",
            }}
          >
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "#333",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                padding: "12px 16px",
                width: "100%",
              }}
            >
              <IconProfile />
              Profile
            </Link>
          </ListItem>
          <ListItem
            className="list-item"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              },
              fontWeight: "bold",
            }}
          >
            <Link
              to="/login"
              onClick={handleLogout}
              style={{
                textDecoration: "none",
                color: "#333",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                padding: "12px 16px",
                width: "100%",
              }}
            >
              <IconLogout />
              Logout
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default UserMenu;
