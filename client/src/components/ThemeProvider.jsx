import React from "react";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-slate-200 text-gray-700 dark:text-gray-200 dark:bg-black"></div>
      {children}
    </div>
  );
};

export default ThemeProvider;
