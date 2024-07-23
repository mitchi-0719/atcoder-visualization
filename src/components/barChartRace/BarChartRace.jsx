import * as d3 from "d3";
import { BarChart } from "./BarChart";
import { allLanguages } from "../../constant/languages";
import { labelWidth, svgHeight, svgWidth } from "../../constant/svgConstats";
import { useEffect, useMemo, useRef, useState } from "react";
import { barChartDataInit, increaseBarChartData } from "../../feature/barChart";

export const BarChartRace = ({ data }) => {
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const [barChartData, setBarChartData] = useState(barChartDataInit(color));
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
            d3.max(allLanguages, (label) => barChartData[label].count)
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
        getViewCount()
      );
      setViewCount((prev) => prev + addition);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    viewCountRef.current = viewCount;
  }, [viewCount]);

  const svg = useMemo(() => {
    return allLanguages.map((label) => {
      const key = barChartData[label].id;
      return <BarChart key={key} data={barChartData[label]} xScale={xScale} />;
    });
  }, [barChartData]);

  return (
    <div>
      <svg width={svgWidth} height={svgHeight} style={{ background: "#eee" }}>
        {svg}
      </svg>
    </div>
  );
};
