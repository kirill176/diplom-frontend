import { Box, IconButton, Typography } from "@mui/material";
import IconLogo from "../../icons/IconLogo/IconLogo";
import { FC, useState } from "react";
import IconUser from "../../icons/IconUser/IconUser";
import UserMenu from "../UserMenu";
import { useAppSelector } from "../../hooks/redux";

const HeaderComponent: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { userName } = useAppSelector((state) => state.user);
  return (
    <Box component="header" sx={{ width: "100%" }}>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "16px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <IconLogo />
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Cloud Disk
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Typography>{userName}</Typography>
          <IconButton
            sx={{
              width: "50px",
              height: "50px",
            }}
            onClick={() => setShowMenu(!showMenu)}
          >
            <IconUser />
          </IconButton>
          {showMenu && <UserMenu setIsShow={setShowMenu} />}
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
