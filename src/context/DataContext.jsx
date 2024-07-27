import { useState, createContext, useEffect } from "react";
import { fetchContestData, fetchData } from "../api/fetchData";

export const DataContext = createContext("");

const fetchAllData = async (
  setData,
  setContestData,
  setIsLoading,
  setError
) => {
  setIsLoading(true);
  setError(null);
  try {
    const [data, contestData] = await Promise.all([
      fetchData(),
      fetchContestData(),
    ]);
    setData(data);
    setContestData(contestData);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [contestData, setContestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllData(setData, setContestData, setIsLoading, setError);
  }, []);

  const contextValue = {
    data,
    contestData,
    isLoading,
    error,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
