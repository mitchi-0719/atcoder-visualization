import { Box, Typography } from "@mui/material";
import { headerHeight } from "../constant/commonConstants";
import { headerBgColor } from "../style/style";

export const Header = () => {
  const title = "AtCoder Visualization";

  return (
    <Box
      component="header"
      height={headerHeight}
      bgcolor={headerBgColor}
      p={0.5}
    >
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
    </Box>
  );
};
