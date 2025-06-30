"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme} className="theme-switcher">Toggle</button> 
    </div>
  );
};

export default ThemeSwitcher;
