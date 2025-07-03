import { useState } from "react";
import "./ThemeSwitch.css";
export const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  const onDarkClick = () => {
    setTheme("dark");
  };
  const onLightClick = () => {
    setTheme("light");
  };

  return (
    <div className="theme-switch">
      <div className="theme-switch__actions">
        <button
          onClick={onDarkClick}
          className={`theme-switch__button ${
            theme === "dark" ? "theme-switch__button_active" : ""
          }`}
        >
          🌑Dark
        </button>
        <button
          onClick={onLightClick}
          className={`theme-switch__button ${
            theme === "light" ? "theme-switch__button_active" : ""
          }`}
        >
          ☀️Light
        </button>
      </div>
      <div className="theme-switch__value">{theme}</div>
    </div>
  );
};
