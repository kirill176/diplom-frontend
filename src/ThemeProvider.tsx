import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { darkTheme, lightTheme } from "./theme";
import { useAppSelector } from "./hooks/redux";

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
