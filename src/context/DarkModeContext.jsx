import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorageState";

const DrakModeContext = createContext();

export function DrakModeProvider({ children }) {
  const [isDrakMode, setIsDarkMode] = useLocalStorage(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  function toggleTheme() {
    return setIsDarkMode((prev) => !prev);
  }
  useEffect(() => {
    if (isDrakMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDrakMode]);

  return (
    <DrakModeContext.Provider value={{ isDrakMode, toggleTheme }}>
      {children}
    </DrakModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DrakModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}
