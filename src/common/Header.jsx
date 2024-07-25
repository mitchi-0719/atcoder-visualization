import { Box, Typography } from "@mui/material";
import { headerHeight } from "../constant/commonConstants";
import { headerBgColor } from "../style/style";

export const Header = () => {
  const title = "AtCoder Visualization";

  return (
    <Box
      display="flex"
      alignItems="center"
      component="header"
      height={headerHeight}
      bgcolor={headerBgColor}
      marginBottom={2}
      p={1.5}
      boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.4)"}
    >
      <Typography variant="h5" component="h1" sx={{ paddingLeft: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};
