import {
  allLanguages,
  convertingLanguageGroup,
  groupedLanguages,
} from "../../constant/languages";

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

const getGroup = (contestData, id) => {
  return contestData[id] && contestData[id].contestGroup;
};

export const increaseBarChartData = (
  data,
  barChartData,
  setBarChartData,
  viewCount,
  selectContest,
  isGrouping,
  contestData
) => {
  const addition = 1000;
  for (let i = viewCount; i < viewCount + addition; i++) {
    if (viewCount + i >= data.length) {
      setBarChartData({ ...barChartData });
      return i;
    }
    const { contest_id, language } = data[i];
    const group = getGroup(contestData, contest_id);
    if (isGrouping) {
      if (
        convertingLanguageGroup[language] &&
        barChartData[convertingLanguageGroup[language]] &&
        selectContest[group]
      ) {
        barChartData[convertingLanguageGroup[language]].count++;
      }
    } else {
      if (barChartData[language] && selectContest[group]) {
        barChartData[language].count++;
      }
    }
  }

  setNewRank(barChartData, isGrouping);
  setBarChartData({ ...barChartData });

  return addition;
};
