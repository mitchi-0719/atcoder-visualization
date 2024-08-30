import { languageToGroupMap } from "../../constant/languages";
import { rateToColorMap } from "../../constant/rate";
import { isNotNullOrUndefined, isNullOrUndefined } from "../isNullOrUndefined";
import { roundToN } from "../roundToN";

const getCategory = (contestData, id) => {
  return contestData[id] && contestData[id].contestCategory;
};

const getColor = (rate) => {
  return rateToColorMap[roundToN(rate, 400, false)];
};

export const filtering = (data, filterData, contestData) => {
  const { contest_id, language, isDuringContest, rate } = data;
  const {
    isGrouping,
    selectContest,
    onlyDuringContest,
    onlyRates,
    selectRate,
    selectLanguage,
    selectGroupedLanguage,
  } = filterData;
  const contestCategory = getCategory(contestData, contest_id);
  const rateColor = getColor(rate);

  if (!selectContest[contestCategory]) {
    return false;
  }

  if (onlyDuringContest && !isDuringContest) {
    return false;
  }

  if (onlyRates && isNullOrUndefined(rate)) {
    return false;
  }

  if (isNotNullOrUndefined(rateColor) && !selectRate[rateColor]) {
    return false;
  }

  if (isGrouping) {
    const languageGroup = languageToGroupMap[language];
    if (!selectGroupedLanguage[languageGroup]) {
      return false;
    }
  } else {
    if (!selectLanguage[language]) {
      return false;
    }
  }

  return true;
};
