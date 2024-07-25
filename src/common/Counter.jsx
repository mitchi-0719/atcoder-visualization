import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { isNotNullOrUndefined } from "../feature/nullUndefined";

export const Counter = ({ label, count, setCount, max, min }) => {
  const increment = () => {
    count < max && setCount((prev) => prev + 1);
  };

  const decrement = () => {
    count > min && setCount((prev) => prev - 1);
  };

  return (
    <>
      {isNotNullOrUndefined(label) && (
        <Typography component="h4" variant="h7">
          {label}
        </Typography>
      )}
      <Box
        display="flex"
        alignItems="center"
        border="1px solid #ccc"
        borderRadius="4px"
        padding={0.5}
        width="fit-content"
        bgcolor="#f9f9f9"
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
        <Box marginX={1} sx={{ verticalAlign: "middle" }}>
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
    </>
  );
};
