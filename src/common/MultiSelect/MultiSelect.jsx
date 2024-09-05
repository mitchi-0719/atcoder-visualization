import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { allLanguages, groupedLanguages } from "../../constant/languages";
import { MultiSelectDialog } from "./MultiSelectDialog";
import { SelectChips } from "./SelectChips";
import { deselectAll, selectAll } from "./multiSelect";

export const MultiSelect = ({ label }) => {
  const {
    isGrouping,
    selectLanguage,
    setSelectLanguage,
    selectGroupedLanguage,
    setSelectGroupedLanguage,
    setLoadingFlag,
  } = useContext(FilterContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDelete = (key) => {
    if (isGrouping) {
      setSelectGroupedLanguage((prev) => ({ ...prev, [key]: false }));
    } else {
      setSelectLanguage((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <Box>
      {label}
      <Box display="flex" gap={1}>
        <Box flex={2}>
          <SelectChips
            value={
              isGrouping
                ? Object.keys(groupedLanguages).filter(
                    (key) => selectGroupedLanguage[key]
                  )
                : allLanguages.filter((key) => selectLanguage[key])
            }
            generateLabel={(value) => value}
            onClick={() => setDialogOpen(true)}
            onDelete={handleDelete}
            sx={{ height: "100px", overflowY: "scroll" }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          gap={0.5}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              selectAll(
                isGrouping ? setSelectGroupedLanguage : setSelectLanguage
              );
              setLoadingFlag(true);
            }}
          >
            全選択
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              deselectAll(
                isGrouping ? setSelectGroupedLanguage : setSelectLanguage
              );
              setLoadingFlag(true);
            }}
          >
            全解除
          </Button>
        </Box>
      </Box>
      <MultiSelectDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={(data) => {
          if (isGrouping) {
            setSelectGroupedLanguage(data);
          } else {
            setSelectLanguage(data);
          }
          setLoadingFlag(true);
        }}
      />
    </Box>
  );
};
