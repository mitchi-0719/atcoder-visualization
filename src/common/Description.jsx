import { Box } from "@mui/material";
import { ContentCard } from "./Card";

export const Description = ({ startIcon, title, children, sx }) => {
  return (
    <ContentCard
      icon={startIcon}
      title={title}
      sx={{
        ...sx,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="center">
        {children}
      </Box>
    </ContentCard>
  );
};
