import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SelectChips } from "./SelectChips";
import { allLanguages, groupedLanguages } from "../../constant/languages";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { MultiSelectCheckBox } from "./MultiSelectCheckBox";

const tempSelectAll = (setTempSelect) => {
  setTempSelect((prev) =>
    Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );
};

const tempDeselectAll = (setTempSelect) => {
  setTempSelect((prev) =>
    Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );
};

export const MultiSelectDialog = ({ open, onClose, onSave }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { isGrouping, selectLanguage, selectGroupedLanguage } =
    useContext(FilterContext);

  const [tempSelect, setTempSelect] = useState(selectLanguage);
  const [tempGroupedSelect, setTempGroupedSelect] = useState(
    selectGroupedLanguage
  );

  useEffect(() => {
    setTempSelect(selectLanguage);
    setTempGroupedSelect(selectGroupedLanguage);
  }, [open]);

  const handleDelete = (key) => {
    if (isGrouping) {
      setTempGroupedSelect((prev) => ({ ...prev, [key]: false }));
    } else {
      setTempSelect((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: isSmallScreen ? "90%" : "60%",
          maxWidth: "600px",
        },
      }}
    >
      <DialogTitle>プログラミング言語の選択</DialogTitle>
      <DialogContent sx={{ overflow: "hidden" }}>
        <Box display="flex" gap={1}>
          <Box flex={2}>
            <SelectChips
              value={
                isGrouping
                  ? Object.keys(groupedLanguages).filter(
                      (key) => tempGroupedSelect[key]
                    )
                  : allLanguages.filter((key) => tempSelect[key])
              }
              generateLabel={(value) => value}
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
              onClick={() =>
                tempSelectAll(isGrouping ? setTempGroupedSelect : setTempSelect)
              }
            >
              全選択
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() =>
                tempDeselectAll(
                  isGrouping ? setTempGroupedSelect : setTempSelect
                )
              }
            >
              全解除
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginTop: 1, height: "300px", overflowY: "scroll" }}>
          {Object.entries(groupedLanguages).map(([key, value]) => {
            return (
              <MultiSelectCheckBox
                key={key}
                parent={key}
                children={value}
                temp={isGrouping ? tempGroupedSelect : tempSelect}
                setTemp={isGrouping ? setTempGroupedSelect : setTempSelect}
              />
            );
          })}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>キャンセル</Button>
        <Button
          variant="contained"
          onClick={() => {
            onSave(isGrouping ? tempGroupedSelect : tempSelect);
            onClose();
          }}
        >
          決定
        </Button>
      </DialogActions>
    </Dialog>
  );
};
