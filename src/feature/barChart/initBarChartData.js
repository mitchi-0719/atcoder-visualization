import { allLanguages } from "../../constant/languages";

export const barChartDataInit = (color) => {
  const temp = {};
  allLanguages.forEach((label, i) => {
    temp[label] = {
      id: i,
      language: label,
      color: color(label),
      count: 0,
      rank: i,
    };
  });

  return temp;
};
