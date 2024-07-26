import { rateToColorMap } from "../../constant/rate";
import { isNotNullOrUndefined, isNullOrUndefined } from "../nullUndefined";
import { roundToN } from "../roundToN";

const getCategory = (contestData, id) => {
  return contestData[id] && contestData[id].contestCategory;
};

const getColor = (rate) => {
  return rateToColorMap[roundToN(rate, 400, false)];
};

export const filtering = (data, filterData, contestData) => {
  const { contest_id, isDuringContest, rate } = data;
  const { selectContest, onlyDuringContest, onlyRates, selectRate } =
    filterData;
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

  return true;
};
