import { useContext, useEffect } from "react";
import * as d3 from "d3";
import { labelWidth } from "../../constant/svgConstants";
import { DarkModeContext } from "../../context/DarkModeContext";

export const BarChartScale = ({ xScale }) => {
  const { isDark } = useContext(DarkModeContext);
  const xAxis = d3.axisBottom(xScale).ticks(5);

  useEffect(() => {
    const xAxisGroup = d3.select(".x-axis");
    xAxisGroup.call(xAxis);
  }, [xAxis]);

  return <g className="x-axis" transform={`translate(${labelWidth}, 0)`} />;
};
