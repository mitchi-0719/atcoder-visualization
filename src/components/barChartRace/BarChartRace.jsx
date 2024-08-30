import * as d3 from "d3";
import { BarChart } from "./BarChart";
import { allLanguages, groupedLanguages } from "../../constant/languages";
import { labelWidth, svgHeight, svgWidth } from "../../constant/svgConstants";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  InitializeBarChartData,
  increaseBarChartData,
} from "../../feature/barChart";
import { Box } from "@mui/material";
import { BarChartScale } from "./BarChartScale";
import { DataContext } from "../../context/DataContext";
import { FilterContext } from "../../context/FilterContext";
import { SignalCellularAlt } from "@mui/icons-material";
import { useInterval } from "../../hooks/useInterval";
import { Loading, ContentCard } from "../../common";

export const BarChartRace = () => {
  const { data, contestData } = useContext(DataContext);
  const {
    isGrouping,
    selectContest,
    onlyDuringContest,
    onlyRates,
    selectRate,
    loadingFlag,
    selectLanguage,
    selectGroupedLanguage,
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
      selectLanguage,
      selectGroupedLanguage,
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
    <ContentCard
      icon={
        <SignalCellularAlt
          sx={{
            transform: "rotate(90deg) scaleX(-1)",
          }}
        />
      }
      title={"バーチャートレース"}
    >
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
    </ContentCard>
  );
};
