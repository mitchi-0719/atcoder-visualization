import { Box, Typography } from "@mui/material";
export const Error = (error) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        エラーが発生しました。
        {error}
      </Typography>
    </Box>
  );
};
