import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { useContext } from "react";
import { useToggle } from "react-use";
import { FilterContext } from "../../context/FilterContext";

export const MultiSelectCheckBox = ({ parent, children, temp, setTemp }) => {
  const { isGrouping } = useContext(FilterContext);

  const [on, toggle] = useToggle(false);
  const hasChildren = children.length !== 1;
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={1}
        sx={{ marginLeft: isGrouping ? 1 : 0 }}
      >
        {!isGrouping && (
          <IconButton
            onClick={hasChildren ? toggle : undefined}
            size="small"
            sx={{
              cursor: hasChildren ? "pointer" : "",
              color: hasChildren ? undefined : "#888",
            }}
          >
            {on ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </IconButton>
        )}
        <FormControlLabel
          label={`${parent}${
            isGrouping || hasChildren ? "" : " （" + children[0] + "）"
          }`}
          control={
            <Checkbox
              size="small"
              checked={
                isGrouping
                  ? temp[parent]
                  : children.every((child) => temp[child])
              }
              onChange={(_, checked) => {
                if (isGrouping) {
                  setTemp((prev) => ({ ...prev, [parent]: checked }));
                } else {
                  setTemp((prev) =>
                    Object.entries(prev).reduce(
                      (acc, [key, value]) => ({
                        ...acc,
                        [key]: children.includes(key) ? checked : value,
                      }),
                      {}
                    )
                  );
                }
              }}
            />
          }
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", ml: 8 }}>
        {!isGrouping &&
          on &&
          hasChildren &&
          children.map((child) => {
            return (
              <FormControlLabel
                key={child}
                label={child}
                control={
                  <Checkbox
                    size="small"
                    checked={temp[child]}
                    onChange={(_, checked) =>
                      setTemp((prev) => ({ ...prev, [child]: checked }))
                    }
                  />
                }
              />
            );
          })}
      </Box>
    </Box>
  );
};
