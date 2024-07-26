import * as d3 from "d3";
import { BarChart } from "./BarChart";
import { allLanguages, groupedLanguages } from "../../constant/languages";
import { labelWidth, svgHeight, svgWidth } from "../../constant/svgConstants";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  InitializeBarChartData,
  increaseBarChartData,
} from "../../feature/barChart";
import { Box, Typography } from "@mui/material";
import { BarChartScale } from "./BarChartScale";
import { DataContext } from "../../context/DataContext";
import { FilterContext } from "../../context/FilterContext";
import { SignalCellularAlt } from "@mui/icons-material";
import { useInterval } from "../../hooks/useInterval";
import { Loading } from "../../common";

export const BarChartRace = () => {
  const { data, contestData } = useContext(DataContext);
  const {
    isGrouping,
    selectContest,
    onlyDuringContest,
    onlyRates,
    selectRate,
    loadingFlag,
    setLoadingFlag,
  } = useContext(FilterContext);

  const [barChartData, setBarChartData] = useState(
    InitializeBarChartData(isGrouping)
  );
  const [viewCount, setViewCount] = useState(0);

  const callbackRef = useRef(null);
  callbackRef.current = () => {
    increaseBarChartData(
      data,
      barChartData,
      setBarChartData,
      viewCount,
      setViewCount,
      selectContest,
      isGrouping,
      onlyDuringContest,
      onlyRates,
      selectRate,
      contestData
    );
  };

  const delay = 100;
  const { start, stop } = useInterval(() => callbackRef.current(), delay);

  useEffect(() => {
    stop();
    setBarChartData(InitializeBarChartData(isGrouping));
    setViewCount(0);
    start();
    setLoadingFlag(false);
  }, [loadingFlag === true]);

  const xScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([
          0,
          Math.max(
            100,
            isGrouping
              ? d3.max(
                  Object.keys(groupedLanguages),
                  (label) => barChartData[label].count
                )
              : d3.max(allLanguages, (label) => barChartData[label].count)
          ),
        ])
        .range([0, svgWidth - labelWidth - 10]),
    [barChartData]
  );

  useEffect(() => {
    if (viewCount > data.length) {
      stop();
    }
  }, [viewCount, data.length]);

  return (
    <Box
      paddingY={1}
      paddingX={2}
      border="1px solid #a0a0a0"
      borderRadius={1}
      bgcolor="#efefef"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
    >
      <Box
        display="flex"
        gap={1}
        paddingBottom={1}
        marginX="auto"
        justifyContent="center"
        alignItems="center"
      >
        <SignalCellularAlt
          sx={{
            transform: "rotate(90deg) scaleX(-1)",
          }}
        />
        <Typography component="h3" variant="h6">
          バーチャートレース
        </Typography>
      </Box>
      {loadingFlag ? (
        <Box width={svgWidth}>
          <Loading />
        </Box>
      ) : (
        <svg width={svgWidth} height={svgHeight}>
          {(isGrouping ? Object.keys(groupedLanguages) : allLanguages).map(
            (label) => {
              const key = barChartData[label].id;
              return (
                <BarChart
                  key={key}
                  data={barChartData[label]}
                  xScale={xScale}
                />
              );
            }
          )}
          <BarChartScale xScale={xScale} />
        </svg>
      )}
    </Box>
  );
};
