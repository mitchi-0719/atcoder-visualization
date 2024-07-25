import { Box, FormControlLabel, Switch } from "@mui/material";

export const OnOffSwitch = ({ checked, onChange, label }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid #ccc"
      borderRadius="4px"
      padding={0.5}
      width="fit-content"
      bgcolor="#f9f9f9"
    >
      <FormControlLabel
        control={<Switch checked={checked} onChange={onChange} />}
        label={label}
        sx={{ marginLeft: "10px" }}
      />
    </Box>
  );
};
