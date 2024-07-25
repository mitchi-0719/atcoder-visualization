import { Box, Typography } from "@mui/material";
import { isNotNullOrUndefined } from "../feature/nullUndefined";

export const Description = ({ startIcon, title, text }) => {
  return (
    <Box
      display="flex"
      padding={1}
      marginY={2}
      marginX={6}
      flexDirection="column"
      border="1px solid #a0a0a0"
      borderRadius={1}
      bgcolor="#efefef"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
      >
        {isNotNullOrUndefined(startIcon) && startIcon}
        <Typography component="h2" fontSize="20px" paddingLeft={0.5}>
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        {text}
      </Box>
    </Box>
  );
};
