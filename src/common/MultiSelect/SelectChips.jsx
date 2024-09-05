import { Box, Chip } from "@mui/material";
import {
  DARK_UI_BG_COLOR,
  DARK_UI_BORDER_COLOR,
  DARK_UI_HOVER_BORDER_COLOR,
  LIGHT_UI_BG_COLOR,
  LIGHT_UI_BORDER_COLOR,
  LIGHT_UI_HOVER_BORDER_COLOR,
} from "../../style/style";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export const SelectChips = ({
  value,
  generateLabel,
  limit,
  onClick,
  onDelete,
  sx,
}) => {
  const { isDark } = useContext(DarkModeContext);

  return (
    <Box
      onClick={onClick}
      sx={{
        ...sx,
        border: `1px solid ${
          isDark ? DARK_UI_BORDER_COLOR : LIGHT_UI_BORDER_COLOR
        }`,
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
        backgroundColor: isDark ? DARK_UI_BG_COLOR : LIGHT_UI_BG_COLOR,
        padding: "8px",
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        "&:hover": {
          border: `1px solid ${
            isDark ? DARK_UI_HOVER_BORDER_COLOR : LIGHT_UI_HOVER_BORDER_COLOR
          }`,
        },
      }}
    >
      {value.slice(0, limit).map((val, index) => (
        <Chip
          label={generateLabel(val)}
          key={index}
          size="small"
          onDelete={() => onDelete(val)}
        />
      ))}
      {value.length - limit > 0 && `+${value.length - limit}`}
    </Box>
  );
};
