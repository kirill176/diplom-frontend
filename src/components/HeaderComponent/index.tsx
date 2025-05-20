import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import IconLogo from "../../icons/IconLogo/IconLogo";
import { FC, useState } from "react";
import IconUser from "../../icons/IconUser/IconUser";
import UserMenu from "../UserMenu";
import { useAppSelector } from "../../hooks/redux";

const HeaderComponent: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { userName } = useAppSelector((state) => state.user);
  return (
    <AppBar
      sx={{
        padding: "16px 40px",
        margin: "16px 0",
        position: "sticky",
        borderRadius: "12px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <IconLogo />
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Cloud Disk
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Typography>{userName}</Typography>
          <IconButton
            sx={{
              width: "50px",
              height: "50px",
            }}
            name="user-menu"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <IconUser />
          </IconButton>
          {showMenu && <UserMenu setIsShow={setShowMenu} />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
