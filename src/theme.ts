import { createTheme, ThemeOptions } from "@mui/material";

const commonThemeSettings: ThemeOptions = {
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontSize: "56px",
    },
    h2: {
      fontSize: "38px",
    },
    h3: {
      fontSize: "32px",
    },
    h4: {
      fontSize: "25px",
    },
    h5: {
      fontSize: "20px",
    },
    h6: {
      fontSize: "18px",
    },
    button: {
      fontSize: "16px",
    },
  },
};

export const lightTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          borderColor: "#ABBDE0",
          borderWidth: "2px",
          color: "black",
          fontWeight: "500",
          "&:hover": { borderWidth: "2px" },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderWidth: "2px",
            borderColor: "#ABBDE0",
            borderRadius: "8px",
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});
