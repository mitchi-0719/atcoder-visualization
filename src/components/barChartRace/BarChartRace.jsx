import * as d3 from "d3";
import { BarChart } from "./BarChart";
import { allLanguages, groupedLanguages } from "../../constant/languages";
import { labelWidth, svgHeight, svgWidth } from "../../constant/svgConstants";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { barChartDataInit, increaseBarChartData } from "../../feature/barChart";
import { Box } from "@mui/material";
import { BarChartScale } from "./BarChartScale";
import { BarChartSetting } from "./BarChartSetting";
import { DataContext } from "../../context/DataContext";
import { FilterContext } from "../../context/FilterContext";

export const BarChartRace = () => {
  const { data, contestData } = useContext(DataContext);
  const { isGrouping, selectContest } = useContext(FilterContext);

  const [barChartData, setBarChartData] = useState(
    barChartDataInit(isGrouping)
  );
  const [viewCount, setViewCount] = useState(0);
  const viewCountRef = useRef(viewCount);

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
    [barChartData, viewCount]
  );

  useEffect(() => {
    const getViewCount = () => viewCountRef.current;

    const interval = setInterval(() => {
      const addition = increaseBarChartData(
        data,
        barChartData,
        setBarChartData,
        getViewCount(),
        selectContest,
        isGrouping,
        contestData
      );
      setViewCount((prev) => prev + addition);
    }, 100);

    return () => clearInterval(interval);
  }, [isGrouping]);

  viewCountRef.current = useMemo(() => {
    return viewCount;
  }, [viewCount]);

  useEffect(() => {
    setBarChartData(barChartDataInit(isGrouping));
    setViewCount(0);
  }, [isGrouping]);

  return (
    <Box display="flex">
      <BarChartSetting />
      <svg width={svgWidth} height={svgHeight} style={{ background: "#eee" }}>
        {(isGrouping ? Object.keys(groupedLanguages) : allLanguages).map(
          (label) => {
            const key = barChartData[label].id;
            return (
              <BarChart key={key} data={barChartData[label]} xScale={xScale} />
            );
          }
        )}
        <BarChartScale xScale={xScale} />
      </svg>
    </Box>
  );
};
