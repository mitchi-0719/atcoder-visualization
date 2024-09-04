import { Box, FormControlLabel, Switch } from "@mui/material";
import {
  DARK_UI_BG_COLOR,
  DARK_UI_BORDER_COLOR,
  DARK_UI_HOVER_BORDER_COLOR,
  LIGHT_UI_BG_COLOR,
  LIGHT_UI_BORDER_COLOR,
  LIGHT_UI_HOVER_BORDER_COLOR,
} from "../style/style";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const OnOffSwitch = ({ checked, onChange, label }) => {
  const { isDark } = useContext(DarkModeContext);
  return (
    <Box
      display="flex"
      alignItems="center"
      border={`1px solid ${
        isDark ? DARK_UI_BORDER_COLOR : LIGHT_UI_BORDER_COLOR
      }`}
      bgcolor={isDark ? DARK_UI_BG_COLOR : LIGHT_UI_BG_COLOR}
      borderRadius="4px"
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.3)"
      padding={0.5}
      width="fit-content"
      sx={{
        "&:hover": {
          border: `1px solid ${
            isDark ? DARK_UI_HOVER_BORDER_COLOR : LIGHT_UI_HOVER_BORDER_COLOR
          }`,
        },
      }}
    >
      <FormControlLabel
        control={<Switch checked={checked} onChange={onChange} size="small" />}
        label={label}
        sx={{ marginX: 1, marginY: 0.5 }}
      />
    </Box>
  );
};
