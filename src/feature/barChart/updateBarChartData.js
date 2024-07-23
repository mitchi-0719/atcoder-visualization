import { allLanguages } from "../../constant/languages";

const setNewRank = (data) => {
  const values = allLanguages.map((label) => {
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
  viewCount
) => {
  const addition = 1000;
  for (let i = viewCount; i < viewCount + addition; i++) {
    if (viewCount + i >= data.length) {
      setBarChartData({ ...barChartData });
      return i;
    }
    const { language } = data[i];
    if (barChartData[language]) {
      barChartData[language].count++;
    }
  }

  setNewRank(barChartData);
  setBarChartData({ ...barChartData });

  return addition;
};
