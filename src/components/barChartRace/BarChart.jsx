import {
  barHeight,
  barMargin,
  labelWidth,
  svgHeight,
} from "../../constant/svgConstats";
import { textColor } from "../../style/style";
import { EllipsisSvgText } from "./EllipsisSvgText";

export const BarChart = ({ data, xScale }) => {
  const { id, language, color, count, rank } = data;
  const textY = barMargin + barHeight / 2 + 2;

  return (
    (barMargin + barHeight) * (rank + 1) <= svgHeight && (
      <g
        key={id}
        transform={`translate(0, ${(barMargin + barHeight) * rank})`}
        style={{ transition: "all 0.5s ease" }}
      >
        <EllipsisSvgText
          x={10}
          y={textY}
          labelWidth={labelWidth - 20}
          language={language}
          textColor={textColor}
        />
        <rect
          x={labelWidth}
          y={barMargin}
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
