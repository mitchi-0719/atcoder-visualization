import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import {
  DARK_UI_BG_COLOR,
  DARK_UI_BORDER_COLOR,
  LIGHT_UI_BG_COLOR,
  LIGHT_UI_BORDER_COLOR,
} from "../style/style";

export const Counter = ({ count, setCount, max, min }) => {
  const { isDark } = useContext(DarkModeContext);

  const increment = () => {
    count < max && setCount((prev) => prev + 1);
  };

  const decrement = () => {
    count > min && setCount((prev) => prev - 1);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      border={`1px solid ${
        isDark ? DARK_UI_BORDER_COLOR : LIGHT_UI_BORDER_COLOR
      }`}
      borderRadius="4px"
      padding={0.5}
      width="fit-content"
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.3)"
      bgcolor={isDark ? DARK_UI_BG_COLOR : LIGHT_UI_BG_COLOR}
    >
      <Box>
        <Button
          variant="contained"
          size="small"
          disabled={count <= min}
          onClick={decrement}
        >
          <RemoveCircleOutline />
        </Button>
      </Box>
      <Box
        marginX={1}
        sx={{ width: "1.5rem", verticalAlign: "middle", textAlign: "center" }}
      >
        {count}
      </Box>
      <Box>
        <Button
          variant="contained"
          size="small"
          disabled={count >= max}
          onClick={increment}
        >
          <AddCircleOutline />
        </Button>
      </Box>
    </Box>
  );
};
