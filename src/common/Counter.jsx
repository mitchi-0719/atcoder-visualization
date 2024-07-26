import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export const Counter = ({ count, setCount, max, min }) => {
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
      border="1px solid #ccc"
      borderRadius="4px"
      padding={0.5}
      width="fit-content"
      bgcolor="#fff"
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
        <Typography>{count}</Typography>
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
