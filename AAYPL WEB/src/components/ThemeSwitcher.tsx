import React, { useState } from "react";

export function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
    >
      Switch Theme
    </button>
  );
}