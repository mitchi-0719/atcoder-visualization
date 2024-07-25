import { Box } from "@mui/material";
import { footerHeight } from "../constant/commonConstants";
import { footerBgColor } from "../style/style";

export const Footer = () => {
  return (
    <Box
      component="footer"
      height={footerHeight}
      bgcolor={footerBgColor}
      marginTop={2}
      boxShadow={"0px -3px 4px rgba(0, 0, 0, 0.4)"}
    />
  );
};
