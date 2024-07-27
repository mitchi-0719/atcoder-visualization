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
    allLanguages.reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );
  const [selectGroupedLanguage, setSelectGroupedLanguage] = useState(
    Object.keys(groupedLanguages).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    )
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
    selectGroupedLanguage,
    setSelectGroupedLanguage,
    loadingFlag,
    setLoadingFlag,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
