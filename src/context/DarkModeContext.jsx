import { useEffect, useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext("");

export const DarkModeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const contextValue = {
    isDark,
    setIsDark,
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (event) => {
      setIsDark(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    setIsDark(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
