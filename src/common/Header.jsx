import { Box, Button, Typography } from "@mui/material";
import { headerHeight } from "../constant/commonConstants";
import {
  DARK_ACCENT_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_ACCENT_COLOR,
  LIGHT_TEXT_COLOR,
} from "../style/style";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { DarkMode, LightMode } from "@mui/icons-material";

export const Header = () => {
  const { isDark, setIsDark } = useContext(DarkModeContext);
  const title = "AtCoder Visualization";

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      component="header"
      height={headerHeight}
      bgcolor={isDark ? DARK_ACCENT_COLOR : LIGHT_ACCENT_COLOR}
      marginBottom={2}
      p={1.5}
      boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.4)"}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{ paddingLeft: 1 }}
        color={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
      >
        {title}
      </Typography>
      <Button
        variant="contained"
        startIcon={isDark ? <LightMode /> : <DarkMode />}
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? "Light" : "Dark"}
      </Button>
    </Box>
  );
};
