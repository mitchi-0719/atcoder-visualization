import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import {
  DARK_CARD_BG_COLOR,
  DARK_UI_BORDER_COLOR,
  LIGHT_CARD_BG_COLOR,
  LIGHT_UI_BORDER_COLOR,
} from "../style/style";

export const ContentCard = ({ icon, title, sx, children }) => {
  const { isDark } = useContext(DarkModeContext);
  return (
    <Box
      paddingY={1}
      paddingX={2}
      border={`1px solid ${
        isDark ? DARK_UI_BORDER_COLOR : LIGHT_UI_BORDER_COLOR
      }`}
      borderRadius={1}
      bgcolor={isDark ? DARK_CARD_BG_COLOR : LIGHT_CARD_BG_COLOR}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
      sx={{ ...sx }}
    >
      <Box
        display="flex"
        gap={1}
        paddingBottom={1}
        marginX="auto"
        justifyContent="center"
        alignItems="center"
      >
        {icon}
        <Typography component="h3" variant="h6">
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
