import { useState, createContext } from "react";
import { contests } from "../constant/contests";
import { rates } from "../constant/rate";
import { allLanguages, groupedLanguages } from "../constant/languages";

export const FilterContext = createContext("");

export const FilterContextProvider = ({ children }) => {
  const [displayCount, setDisplayCount] = useState(15);
  const [isGrouping, setIsGrouping] = useState(false);
  const [selectContest, setSelectContest] = useState(
    contests.reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );
  const [onlyDuringContest, setOnlyDuringContest] = useState(false);
  const [onlyRates, setOnlyRates] = useState(false);
  const [selectRate, setSelectRate] = useState(
    rates.reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );
  const [selectLanguage, setSelectLanguage] = useState(
    Object.entries(groupedLanguages).reduce((acc, [parent, children]) => {
      return {
        ...acc,
        [parent]: { checked: true, isParent: true },
        ...children.reduce(
          (childAcc, child) => ({
            ...childAcc,
            [child]: { checked: true, isParent: false },
          }),
          {}
        ),
      };
    }, {})
  );
  const [loadingFlag, setLoadingFlag] = useState(false);

  const contextValue = {
    displayCount,
    setDisplayCount,
    isGrouping,
    setIsGrouping,
    selectContest,
    setSelectContest,
    onlyDuringContest,
    setOnlyDuringContest,
    onlyRates,
    setOnlyRates,
    selectRate,
    setSelectRate,
    selectLanguage,
    setSelectLanguage,
    loadingFlag,
    setLoadingFlag,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
