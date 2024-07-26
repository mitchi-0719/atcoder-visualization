import * as d3 from "d3";
import { allLanguages, groupedLanguages } from "../../constant/languages";

export const InitializeBarChartData = (isGrouping) => {
  const temp = {};
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  if (isGrouping) {
    Object.keys(groupedLanguages).forEach((label, i) => {
      temp[label] = {
        id: i,
        language: label,
        color: color(label),
        count: 0,
        rank: i,
      };
    });
  } else {
    allLanguages.forEach((label, i) => {
      temp[label] = {
        id: i,
        language: label,
        color: color(label),
        count: 0,
        rank: i,
      };
    });
  }

  return temp;
};
