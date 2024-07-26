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
  displayContestText,
  contests,
} from "../../constant/contests";
import { Settings } from "@mui/icons-material";
import { displayRateText, rateRange, rates } from "../../constant/rate";

export const BarChartSetting = () => {
  const {
    displayCount,
    setDisplayCount,
    isGrouping,
    setIsGrouping,
    selectContest,
    setSelectContest,
    onlyDuringContest,
    setOnlyDuringContest,
    onlyRates,
    setOnlyRates,
    selectRate,
    setSelectRate,
    setLoadingFlag,
  } = useContext(FilterContext);
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingY={1}
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

      <Box gap={1}>
        <Box display="flex">
          <Typography>言語グループ化</Typography>
          <HintToolTip text="オンにすると、同種の言語でグループ化されます。　例: Python, PyPy, CPython => Python" />
        </Box>
        <OnOffSwitch
          label="言語グループ化"
          checked={isGrouping}
          onChange={() => {
            setLoadingFlag(true);
            setIsGrouping((prev) => !prev);
          }}
        />
      </Box>

      <Box>
        <Box display="flex" marginBottom={1}>
          <Typography>コンテスト</Typography>
          <HintToolTip text="チャートに加算されるコンテストの種類を指定できます" />
        </Box>
        <Box display="flex" gap={1}>
          <Box flex={2}>
            <MultiAutoComplete
              limitTags={3}
              options={contests}
              value={contests.filter((key) => selectContest[key])}
              generateLabel={(option) => displayContestText[option]}
              onChange={(_, newValue) => {
                setLoadingFlag(true);
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
            onClick={() => {
              setLoadingFlag(true);
              setSelectContest(
                contests.reduce((acc, key) => ({ ...acc, [key]: true }), {})
              );
            }}
            size="small"
            variant="contained"
            flex={1}
          >
            全選択
          </Button>
        </Box>
      </Box>

      <Box display="flex" gap={3}>
        <Box gap={1}>
          <Box display="flex">
            <Typography>コンテスト中のみ</Typography>
            <HintToolTip text="オンにすると、コンテスト中のデータのみが反映されます。" />
          </Box>
          <OnOffSwitch
            label="コンテスト中"
            checked={onlyDuringContest}
            onChange={() => {
              setLoadingFlag(true);
              setOnlyDuringContest((prev) => !prev);
            }}
          />
        </Box>
        <Box gap={1}>
          <Box display="flex">
            <Typography>レートがあるもののみ</Typography>
            <HintToolTip text="オンにすると、レートが存在するデータのみが反映されます。（データによってレートの有無が異なるため）" />
          </Box>
          <OnOffSwitch
            label="レートあり"
            checked={onlyRates}
            onChange={() => {
              setLoadingFlag(true);
              setOnlyRates((prev) => !prev);
            }}
          />
        </Box>
      </Box>

      <Box>
        <Box display="flex" marginBottom={1}>
          <Typography>レート</Typography>
          <HintToolTip text="チャートに加算されるレートの種類を指定できます。" />
        </Box>
        <Box display="flex" gap={1}>
          <Box flex={2}>
            <MultiAutoComplete
              limitTags={3}
              options={rates}
              value={rates.filter((key) => selectRate[key])}
              generateLabel={(option) => displayRateText[option]}
              onChange={(_, newValue) => {
                setLoadingFlag(true);
                const updatedSelection = rates.reduce(
                  (acc, key) => ({
                    ...acc,
                    [key]: newValue.includes(key),
                  }),
                  {}
                );
                setSelectRate(updatedSelection);
              }}
              isDisplayToolTip
              generateToolTipText={(option) =>
                `レート: ${rateRange[option].lower}~${rateRange[option].upper}`
              }
            />
          </Box>
          <Button
            onClick={() => {
              setLoadingFlag(true);
              setSelectRate(
                rates.reduce((acc, key) => ({ ...acc, [key]: true }), {})
              );
            }}
            size="small"
            variant="contained"
            flex={1}
          >
            全選択
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
