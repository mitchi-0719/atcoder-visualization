import { useContext } from "react";
import {
  barHeight,
  barMargin,
  labelWidth,
  scaleHeight,
  svgHeight,
} from "../../constant/svgConstants";
import { DARK_TEXT_COLOR, LIGHT_TEXT_COLOR } from "../../style/style";
import { EllipsisSvgText } from "./EllipsisSvgText";
import { FilterContext } from "../../context/FilterContext";
import { DarkModeContext } from "../../context/DarkModeContext";

export const BarChart = ({ data, xScale }) => {
  const { isDark } = useContext(DarkModeContext);
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
          textColor={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
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
          fill={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
          stroke={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
          style={{
            msUserSelect: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        >
          {count.toLocaleString()}
        </text>
      </g>
    )
  );
};
