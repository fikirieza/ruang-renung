"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "siang" | "malam";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: "siang", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("siang");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kp-theme");
      if (saved === "malam" || saved === "siang") setTheme(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("kp-theme", theme); } catch {}
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "siang" ? "malam" : "siang")), []);
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
