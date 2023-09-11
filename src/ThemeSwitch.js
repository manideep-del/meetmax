import React from "react";

function ThemeSwitch({ onToggleTheme, isDarkMode }) {
  return (
    <label>
      Dark Mode
      <input type="checkbox" checked={isDarkMode} onChange={onToggleTheme} />
    </label>
  );
}

export default ThemeSwitch;
