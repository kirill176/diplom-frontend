import { IconButton } from "@mui/material";
import IconLightTheme from "../../icons/IconLightTheme";
import IconDarkTheme from "../../icons/IconDarkTheme";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleTheme } from "../../redux/reducers/themeReducer";

const ThemeButton = () => {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "12px",
        right: "8px",
        width: "48px",
        height: "48px",
        padding: "12px",
      }}
      onClick={() => dispatch(toggleTheme())}
    >
      {isDarkMode ? <IconLightTheme /> : <IconDarkTheme />}
    </IconButton>
  );
};

export default ThemeButton;
