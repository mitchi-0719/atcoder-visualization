import {
  allLanguages,
  languageToGroupMap,
  groupedLanguages,
} from "../../constant/languages";
import { convertEpochToDate } from "../convertEpoch";
import { isNotNullOrUndefined } from "../isNullOrUndefined";
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
  selectLanguage,
  selectGroupedLanguage,
  setCurrentDate,
  contestData
) => {
  const addition = 1000;
  for (let i = 0; i < addition; i++) {
    if (viewCount + i >= data.length) {
      setBarChartData({ ...barChartData });
      setViewCount((prev) => prev + i);
      setCurrentDate(
        isNotNullOrUndefined(data[data.length - 1]) &&
          convertEpochToDate(data[data.length - 1].epoch_second)
      );
      return i;
    }
    const { language } = data[viewCount + i];
    if (
      filtering(
        data[viewCount + i],
        {
          isGrouping,
          selectContest,
          onlyDuringContest,
          onlyRates,
          selectRate,
          selectLanguage,
          selectGroupedLanguage,
        },
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
  setCurrentDate(
    isNotNullOrUndefined(data[viewCount - 1]) &&
      convertEpochToDate(data[viewCount - 1].epoch_second)
  );

  return addition;
};
