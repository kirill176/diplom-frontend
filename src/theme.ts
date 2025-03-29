import { createTheme, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      shadow: string;
      border: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      shadow?: string;
      border?: string;
    };
  }
}

const commonThemeSettings: ThemeOptions = {
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontSize: "56px",
      fontWeight: "600",
      letterSpacing: "-0.5px",
    },
    h2: {
      fontSize: "38px",
      fontWeight: "500",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "400",
    },
    h4: {
      fontSize: "25px",
      fontWeight: "400",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "400",
    },
    h6: {
      fontSize: "18px",
      fontWeight: "500",
    },
    button: {
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "capitalize",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "400",
    },
  },
};

export const lightTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    customColors: {
      shadow: "rgba(0, 0, 0, 0.1)",
      border: "1px solid #ABBDE0",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          borderColor: "#ABBDE0",
          borderWidth: "2px",
          fontWeight: "500",
          padding: "8px 16px",
          "&:hover": {
            color: "#1976d2",
            backgroundColor: "#e3f2fd",
            borderColor: "#1976d2",
          },
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
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          "&:hover": {
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          color: "#000",
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
      default: "#121212",
      paper: "#1e1e1e",
    },
    customColors: {
      shadow: "rgba(33, 150, 243, 0.5)",
      border: "1px solid #4A5568",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          borderColor: "#ABBDE0",
          borderWidth: "2px",
          color: "#ffffff",
          fontWeight: "500",
          padding: "8px 16px",
          "&:hover": {
            backgroundColor: "#1e88e5",
            borderColor: "#1976d2",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderWidth: "2px",
            borderColor: "#ABBDE0",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(255, 255, 255, 0.3)",
          padding: "16px",
          "&:hover": {
            boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          boxShadow: "0 4px 16px rgba(255, 255, 255, 0.15)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },
  },
});
