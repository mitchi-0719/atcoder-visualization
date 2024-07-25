import { Info } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const HintToolTip = ({ text }) => {
  return (
    <Tooltip title={text}>
      <Info color="info" />
    </Tooltip>
  );
};
