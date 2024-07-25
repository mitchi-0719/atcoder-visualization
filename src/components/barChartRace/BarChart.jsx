import { useContext } from "react";
import {
  barHeight,
  barMargin,
  labelWidth,
  scaleHeight,
  svgHeight,
} from "../../constant/svgConstants";
import { textColor } from "../../style/style";
import { EllipsisSvgText } from "./EllipsisSvgText";
import { FilterContext } from "../../context/FilterContext";

export const BarChart = ({ data, xScale }) => {
  const { displayCount } = useContext(FilterContext);
  const { id, language, color, count, rank } = data;
  const textY = barMargin + barHeight / 2 + scaleHeight + 2;

  return (
    (barMargin + barHeight) * (rank + 1) <= svgHeight &&
    rank < displayCount && (
      <g
        key={id}
        transform={`translate(0, ${(barMargin + barHeight) * rank})`}
        style={{ transition: "all 0.5s ease" }}
      >
        <EllipsisSvgText
          x={labelWidth - 10}
          y={textY}
          labelWidth={labelWidth - 10}
          language={language}
          textColor={textColor}
        />
        <rect
          x={labelWidth}
          y={barMargin + scaleHeight}
          width={xScale(count)}
          height={barHeight}
          fill={color}
          style={{ transition: "all 0.5s ease" }}
        />
        <text
          x={labelWidth + 10}
          y={textY}
          dominantBaseline="middle"
          fill={textColor}
          stroke={textColor}
        >
          {count.toLocaleString()}
        </text>
      </g>
    )
  );
};
