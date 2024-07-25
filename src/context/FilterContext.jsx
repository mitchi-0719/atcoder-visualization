import { useState, createContext } from "react";
import { contests } from "../constant/contests";

export const FilterContext = createContext("");

export const FilterContextProvider = ({ children }) => {
  const [displayCount, setDisplayCount] = useState(15);
  const [isGrouping, setIsGrouping] = useState(false);
  const [selectContest, setSelectContest] = useState(
    contests.reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );

  const contextValue = {
    displayCount,
    setDisplayCount,
    isGrouping,
    setIsGrouping,
    selectContest,
    setSelectContest,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
