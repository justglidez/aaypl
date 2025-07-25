import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

/**
 * Provides access to theme context (dark, toggleTheme).
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}