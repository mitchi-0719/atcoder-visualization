import { Box, Typography } from "@mui/material";
import { Counter, OnOffSwitch, MultiAutoComplete } from "../../common";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { displayGroupName, groupList } from "../../constant/contests";

export const BarChartSetting = () => {
  const {
    displayCount,
    setDisplayCount,
    isGrouping,
    setIsGrouping,
    selectContest,
    setSelectContest,
  } = useContext(FilterContext);
  return (
    <Box>
      <Typography component="h3" variant="h6">
        設定
      </Typography>
      <OnOffSwitch
        label="グループ化"
        checked={isGrouping}
        onChange={() => setIsGrouping((prev) => !prev)}
      />
      <MultiAutoComplete
        limitTags="4"
        options={groupList}
        value={groupList.filter((key) => selectContest[key])}
        generateLabel={(option) => displayGroupName[option]}
        onChange={(_, newValue) => {
          const updatedSelection = groupList.reduce(
            (acc, key) => ({
              ...acc,
              [key]: newValue.includes(key),
            }),
            {}
          );
          setSelectContest(updatedSelection);
        }}
      />
      <Counter
        label="表示数"
        count={displayCount}
        setCount={setDisplayCount}
        max={15}
        min={3}
      />
    </Box>
  );
};
