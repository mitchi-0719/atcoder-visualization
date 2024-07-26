import {
  allLanguages,
  languageToGroupMap,
  groupedLanguages,
} from "../../constant/languages";
import { filtering } from "./filtering";

const setNewRank = (data, isGrouping) => {
  const values = (
    isGrouping ? Object.keys(groupedLanguages) : allLanguages
  ).map((label) => {
    const { count, rank, language } = data[label];
    return {
      count,
      rank,
      language,
    };
  });

  values.sort((a, b) => {
    if (a.count == b.count) {
      return a.rank - b.rank;
    } else {
      return b.count - a.count;
    }
  });
  values.forEach(({ language }, i) => {
    data[language].rank = i;
  });
};

export const increaseBarChartData = (
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
  contestData
) => {
  const addition = 1000;
  for (let i = viewCount; i < viewCount + addition; i++) {
    if (viewCount + i >= data.length) {
      setBarChartData({ ...barChartData });
      setViewCount((prev) => prev + i);
      return i;
    }
    const { language } = data[i];
    if (
      filtering(
        data[i],
        { selectContest, onlyDuringContest, onlyRates, selectRate },
        contestData
      )
    ) {
      if (isGrouping) {
        if (
          languageToGroupMap[language] &&
          barChartData[languageToGroupMap[language]]
        ) {
          barChartData[languageToGroupMap[language]].count++;
        }
      } else {
        if (barChartData[language]) {
          barChartData[language].count++;
        }
      }
    }
  }

  setNewRank(barChartData, isGrouping);
  setBarChartData({ ...barChartData });
  setViewCount((prev) => prev + addition);

  return addition;
};
