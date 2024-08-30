import { Box, Typography } from "@mui/material";
import { ContentCard } from "./Card";

export const Description = ({ startIcon, title, children }) => {
  return (
    <ContentCard
      icon={startIcon}
      title={title}
      sx={{ display: "flex", flexDirection: "column", marginY: 2, marginX: 6 }}
    >
      <Box display="flex" justifyContent="center">
        {children}
      </Box>
    </ContentCard>
  );
};
