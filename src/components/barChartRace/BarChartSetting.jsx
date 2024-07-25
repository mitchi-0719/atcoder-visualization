import { Box, Button, Typography } from "@mui/material";
import {
  Counter,
  OnOffSwitch,
  MultiAutoComplete,
  HintToolTip,
} from "../../common";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import {
  contestDescription,
  displayGroupName,
  contests,
} from "../../constant/contests";
import { Settings } from "@mui/icons-material";

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
    <Box
      display="flex"
      flexDirection="column"
      paddingTop={1}
      paddingX={2}
      width="440px"
      gap={2}
      border="1px solid #a0a0a0"
      borderRadius={1}
      bgcolor="#efefef"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
    >
      <Box
        display="flex"
        gap={1}
        marginX="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Settings />
        <Typography component="h3" variant="h6">
          設定
        </Typography>
      </Box>
      <Box gap={1}>
        <Box display="flex">
          <Typography>グループ化</Typography>
          <HintToolTip text="オンにすると、同種の言語でグループ化されます。　例: Python, PyPy, CPython => Python" />
        </Box>
        <OnOffSwitch
          label="グループ化"
          checked={isGrouping}
          onChange={() => setIsGrouping((prev) => !prev)}
        />
      </Box>
      <Box>
        <Box display="flex" marginBottom={0.5}>
          <Typography>コンテスト</Typography>
          <HintToolTip text="チャートに加算されるコンテストの種類を指定できます" />
        </Box>
        <Box display="flex" gap={1}>
          <Box flex={2}>
            <MultiAutoComplete
              limitTags="3"
              options={contests}
              value={contests.filter((key) => selectContest[key])}
              generateLabel={(option) => displayGroupName[option]}
              onChange={(_, newValue) => {
                const updatedSelection = contests.reduce(
                  (acc, key) => ({
                    ...acc,
                    [key]: newValue.includes(key),
                  }),
                  {}
                );
                setSelectContest(updatedSelection);
              }}
              isDisplayToolTip
              generateToolTipText={(option) => contestDescription[option]}
            />
          </Box>
          <Button
            onClick={() =>
              setSelectContest(
                contests.reduce((acc, key) => ({ ...acc, [key]: true }), {})
              )
            }
            size="small"
            variant="contained"
            flex={1}
          >
            全選択
          </Button>
        </Box>
      </Box>
      <Box gap={1}>
        <Box display="flex">
          <Typography>表示数</Typography>
          <HintToolTip text="表示されるチャートの数を指定できます。(範囲: 3~15)" />
        </Box>
        <Counter
          count={displayCount}
          setCount={setDisplayCount}
          max={15}
          min={3}
        />
      </Box>
    </Box>
  );
};
