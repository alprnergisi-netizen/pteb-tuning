"use client";

import { createContext, useEffect } from "react";

// Light mode removed — always dark
const ThemeContext = createContext<{ theme: "dark"; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.removeItem("pteb-theme");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
