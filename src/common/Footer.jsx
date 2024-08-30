import { Box } from "@mui/material";
import { footerHeight } from "../constant/commonConstants";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
import { DARK_ACCENT_COLOR, LIGHT_ACCENT_COLOR } from "../style/style";

export const Footer = () => {
  const { isDark } = useContext(DarkModeContext);
  return (
    <Box
      component="footer"
      height={footerHeight}
      bgcolor={isDark ? DARK_ACCENT_COLOR : LIGHT_ACCENT_COLOR}
      marginTop={2}
      boxShadow={"0px -3px 4px rgba(0, 0, 0, 0.4)"}
    />
  );
};
