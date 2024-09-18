import { useEffect } from "react";
import * as d3 from "d3";
import { labelWidth } from "../../constant/svgConstants";

export const BarChartScale = ({ xScale }) => {
  const xAxis = d3.axisBottom(xScale).ticks(5);

  useEffect(() => {
    const xAxisGroup = d3.select(".x-axis");
    xAxisGroup.call(xAxis);
  }, [xAxis]);

  return (
    <g
      className="x-axis"
      transform={`translate(${labelWidth}, 0)`}
      style={{
        msUserSelect: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    />
  );
};
