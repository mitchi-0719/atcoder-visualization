import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Header, Footer } from "../common";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
import { DARK_BG_COLOR, LIGHT_BG_COLOR } from "../style/style";
import { BarChartRaceMain } from "./barChartRace";

export const Main = () => {
  const { isDark } = useContext(DarkModeContext);
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        bgcolor={isDark ? DARK_BG_COLOR : LIGHT_BG_COLOR}
        className={isDark ? "dark" : "light"}
      >
        <Header />
        <BarChartRaceMain />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
