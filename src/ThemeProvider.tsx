import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { darkTheme, lightTheme } from "./theme";

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const isDarkMode = false;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
